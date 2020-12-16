
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const Place = require('../models/markets');
const getMarketById = async (req, res, next) => {
  const placeId = req.params.pid;

  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a place.',
      500
    );
    return next(error);
  }

  if (!place) {
    const error = new HttpError(
      'Could not find place for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ place: place.toObject({ getters: true }) });
};


const getMarkets = async (req, res, next) => {

  let place;
  try {
    place = await Place.find({});
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a place.',
      500
    );
    return next(error);
  }

  if (!place) {
    const error = new HttpError(
      'Could not find place for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ place: place.map(place=>place.toObject({ getters: true }))  });
};

const createMarket = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
  const { title, Products,images } = req.body;
  const createdMarket = new Place({
    title,
    Products,
    images
  });

  try {
    await createdMarket.save(); 
  } catch (err) {
    const error = new HttpError(
      'Creating place failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ place: createdMarket });
};

const deleteMarket = async (req, res, next) => {
  const placeId = req.params.pid;

  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete place.',
      500
    );
    return next(error);
  }

  if (!place) {
    const error = new HttpError('Could not find place for this id.', 404);
    return next(error);
  }

  try {
    await place.remove();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete place.',
      500
    );
    return next(error);
  }
  
  res.status(200).json({ message: 'Deleted place.' });
};

const updateMarket = async (req, res, next) => {
  const placeId = req.params.id;
  const Place = await Place.findById(placeId);
  if (Place) {
    Place.title = req.body.title || Place.title;
    Place.images = req.body.email || Place.images;
    Place.Products = req.body.Products || Place.Products;
    const updatedPlace = await Place.save();
    res.send({
      _id: updatedPlace.id,
      title: updatedPlace.title,
      images: updatedPlace.images,
      Products: updatedPlace.Products
    });
  } else {
    res.status(404).send({ message: 'Place Not Found' });
  }
}

exports.getMarketById = getMarketById;
exports.createMarket = createMarket;
exports.deleteMarket = deleteMarket;
exports.getMarkets = getMarkets;
exports.updateMarket = updateMarket;
