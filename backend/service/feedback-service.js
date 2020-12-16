const User = require('../models/user');

const addComment = async (req, res, next) => {
    const { userId, review } = req.body;
    User.findOne({ _id: userId }, (err, userInfo) => {
  
            User.findOneAndUpdate(
                { _id: userId },
                {
                    $push: {
                        reviews: {
                            id: Math.floor(Math.random() * 10000 * 10000),
                            description: review,
                            date: Date.now()
                        }
                    }
                },
                {  returnOriginal: false,upsert:true  },
                (err, userInfo) => {
                    console.log(userInfo.reviews);
                    if (err) return res.json({ success: false, err });
                    res.status(200).json(userInfo.reviews)
                }
            )
        
    })
}

const getComments = async (req, res, next) => {
    let comments;
    let review = [];
    let allreview ;
    User.find({},(err, userInfo)=>{
        allreview =   userInfo.map(x => {
            if(x.reviews.length != 0){
               return x.reviews;
            }
        })
        return res.status(200).json({Success: true, Reviews: allreview});
    })
  };

  const removeComment = async (req, res) => {
    const { userId, commentId} = req.body
  User.findOneAndUpdate(
      { _id: userId },
      {
          "$pull":
              { "reviews": { "id": parseInt(commentId) } }
      },
      {   returnOriginal: false},
      (err, userInfo) => {
          console.log(userInfo)
          let review = userInfo.reviews;
          let array = review.map(item => {
              return item.id
          })
          return res.status(200).json({Success: true, Reviews: review});
      }
  )
  
}

const getCommentsByUserId = (req, res) => {
    const userId = req.params.pid;
  User.findOne(
      { _id: userId},
      (err, userInfo) => {
          
          let review = userInfo.reviews;
          let array = review.map(item => {
              return item.id
            
          })
          return res.status(200).json({Success: true, Reviews: review});
      }
  )
}
exports.addComment = addComment;
exports.getComments = getComments;
exports.removeComment = removeComment;
exports.getCommentsByUserId = getCommentsByUserId;