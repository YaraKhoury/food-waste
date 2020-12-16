const HttpError = require('../models/http-error');
const Reservation = require('../models/reservation');
const User = require('../models/user');
const getAllReservations = async (req, res, next) => {
    let reservations;
    try {
        reservations = await Reservation.find({});
    } catch(err){
        const error = new HttpError("Something went wrong",500);
    }

    res.json({ reservation: reservations.map(reservation => reservation.toObject({ getters: true })) });
}
const addReservation = async (req, res, next) => {
 const { userId,marketName,reservationDate,numberOfPeople,otherComments,reservedBy } = req.body;
  const reservationCreated = new Reservation({
    userId,
    marketName,
    numberOfPeople,
    reservedBy,
    otherComments,
    reservationDate
    });
    User.findOneAndUpdate(
      { _id: userId },
      {
          $push: {
            reservation: {
                  userId: userId,
                  marketName: marketName,
                  numberOfPeople: numberOfPeople,
                  reservedBy: reservedBy,
                  reservationDate: reservationDate,
                  otherComments: otherComments
              }
          }
      },
      {upsert:true, returnOriginal: false},
      (err, userInfo) => {
        console.log(userInfo.reservation);
        const createdReservation = new Reservation({
          userId,
          marketName,
          numberOfPeople,
          reservationDate,
          otherComments
        });
        async(req,res,next) => {
          try{
          await createdReservation.save(); 
          } catch(err){
            const error = new HttpError("Something went wrong",500);
        }
          res.status(201).json({ reservation: createdReservation });  
        }
       
      
          // if (err) return res.json({ success: false, err });
         // res.status(201).json({ reservation: paymentCreated.toObject({ getters: true }) });
      }
  )
      // User.findOneAndUpdate(
      //   { _id: userId},
      //   {
      //       "$pull":
      //           { "reservation": { "id": x.id } }
      //   },
      //   { new: true },
      //   (err, userInfo) => {
      //     if (err) return res.json({ err });
      // });
    try {
      await reservationCreated.save();
    } catch (err) {
      const error = new HttpError(
        'Reservation Failed, please try again later.',
        err
      );
      return next(error);
    }
    res.status(201).json({ reservation: reservationCreated.toObject({ getters: true }) });
}

const getReservationById =  async (req, res, next) => {
    const reservationId = req.params.pid;
    let reservations;
    try {
      console.log(req.params)
      reservations = await Reservation.find({"userId":reservationId});
      console.log(reservations)
      
    } catch(err){
        const error = new HttpError("Something went wrong",500);
        return next(error);
    }
res.json({reservation: reservations.map(res => res.toObject({ getters: true }))  });
}
const updateReservation =  async (req, res, next) =>{
    const reseravtionId = req.params.id;
    const reservation = await Reservation.findById(reseravtionId);
    if (reservation) {
        reservation.marketName = req.body.marketName || reservation.marketName;
        reservation.numberOfPeople = req.body.numberOfPeople || reservation.numberOfPeople;
        reservation.otherComments = req.body.otherComments ||reservation.otherComments;
      const UpdatedReservation = await reservation.save();
      res.send({
        _id: UpdatedReservation.id,
        userId: UpdatedReservation.userId,
        marketName: UpdatedReservation.marketName,
        numberOfPeople: UpdatedReservation.numberOfPeople,
        otherComments: UpdatedReservation.otherComments
      });
    } else {
      res.status(404).send({ message: 'Reservation Not Found' });
    }
}
const deleteReservation =  async (req, res, next) => {
    let reservation;
    const reservationId = req.params.pid;
    try {
        reservation = await Reservation.findById(reservationId);
    } catch(err) {
        const error = new HttpError(
            'Something Went Wrong',500);
            return next(error);
    }
   if(!reservation){
    const error = new HttpError(
        'Something Went Wrong',500);
        return next(error)
   }
    try{
        await reservation.remove();
    }catch(err){
        const error = new HttpError(
            'Something Went Wrong',500);
            return next(error);
    }
    res.status(200).json({message: 'Reservation Deleted.'});
    
}

const getReservationByMarketName = async (req, res, next) => {
  const marketName = req.params.marketName;
  console.log(req.params);
    let reservations;
    try {
      reservations = await Reservation.find({"marketName":marketName});
      console.log(reservations);
    } catch(err){
        const error = new HttpError("Something went wrong",500);
        return next(error);
    }
res.json({reservation: reservations.map(reservation => reservation.toObject({ getters: true }))});
}
exports.getAllReservations = getAllReservations;
exports.addReservation = addReservation;
exports.getReservationById = getReservationById;
exports.updateReservation = updateReservation;
exports.deleteReservation = deleteReservation;
exports.getReservationByMarketName = getReservationByMarketName;