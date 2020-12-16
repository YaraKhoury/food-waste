const Place = require('../models/markets');
const User = require('../models/user');
const Reservation = require('../models/reservation');
const ZaatarWBhar = new Place({
    "title":"Zaatar w Bhar",
    "Products":[
      {"name": "Manakish", "discountedPrice": "500", "expiryDate": "2020-11-18","productImg":"https://www.maureenabood.com/wp-content/uploads/2013/02/Manoushe-2-Maureen-Abood.jpg"},
      {"name": "Knefe", "discountedPrice": "3500", "expiryDate": "2020-11-16","productImg":"https://cdn.nogarlicnoonions.com/images/thumbs/image.php/image_74ce75d8b27e70eadba0b3d4949af52d.jpg?width=2000&height=2000&image=/images/articles/2020-04/knefeh-nogarlicnoonions-372020-04-22-02-41-54.jpeg"},
      {"name": "Chicken Sandwish", "discountedPrice": "6500", "expiryDate": "2020-11-15","productImg":"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/6/8/0/FNM_070110-Copy-That-002_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539317193.jpeg"},
      {"name": "Salad ", "discountedPrice": "4999", "expiryDate": "2020-11-12","productImg":"https://recipes.heart.org/-/media/aha/recipe/recipe-images/mediterranean-salad.jpg?h=636&la=en&mw=890&w=890&hash=8A95325FBD7890C243CFD1124CFBA7FA090E181B"}
  ],
    "images":"https://www.lebanoninapicture.com/Prv/Images/Pages/Page_62295/insta_11-20-2016-10-47-14-am-m.jpg"
  });

  const AbouWadih = new Place({
    "title":"Abou Wadih",
    "Products":[
      {"name": "Cheese", "discountedPrice": "500", "expiryDate": "2020-11-14","productImg":"https://modernrestaurantmanagement.com/assets/media/2018/08/cheeseboard-1600x655.jpg"},
      {"name": "Pizza", "discountedPrice": "8500", "expiryDate": "2020-11-14","productImg":"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Homemade-Pizza_EXPS_HCA20_376_E07_09_2b.jpg"},
      {"name": "Labne", "discountedPrice": "1500", "expiryDate": "2020-11-15","productImg":"https://cdn.nogarlicnoonions.com/images/thumbs/image.php/image_5961ac07ee3a5edd39be0b0601fe6f87.jpg?width=700&height=400&cropratio=700:400&image=/images/articles/2020-03/tarik-nahel-faraya-lebanon-nogarlicnoonions-152020-03-27-11-59-00.jpeg"},
      {"name": "Meat", "discountedPrice": "6500", "expiryDate": "2020-11-08","productImg":"https://i1.wp.com/travelingwiththyme.com/wp-content/uploads/2017/05/SteakBarSushi-Restaurant-Lebanon-1.png?ssl=1"},
      {"name": "Chicken ", "discountedPrice": "5000", "expiryDate": "2020-11-10","productImg":"https://cdn.nogarlicnoonions.com/images/thumbs/image.php/image_a5ac08e877b981f0ff616a70bb2d4001.jpg?width=700&height=400&cropratio=700:400&image=/images/articles/2016-04/madfry-chicken-seoul-korea182016-04-25-08-18-21.jpg"},
      {"name": "Pickles", "discountedPrice": "5500", "expiryDate": "2020-11-09","productImg":"https://rinnoo.net/f/CMS/Attachments/2015/2/19/8981_10675800_306268842907416_1047617689205176095_N_-_Qu80_RT1600x1024-_OS778x519-_RD778x519-.jpg"}
  ],
    "images":"https://lippieismylife.files.wordpress.com/2013/09/bedouin-cafe-001.jpg"
  })
  
  const Falafelna = new Place({
    "title":"Falafelna",
    "Products":[
      {"name": "Falafel Sandwich", "discountedPrice": "2500", "expiryDate": "2020-11-13","productImg":"https://pulses.org/images/com_yoorecipe/cropped-Lebanon_falafel--2.jpg"},
      {"name": "Hemous", "discountedPrice": "3500", "expiryDate": "2020-11-13","productImg":"https://kitchen.sayidaty.net/uploads/small/71/710cfe43791e20c6641d81103a484270_w750_h500.jpg"},
      {"name": "Fatter", "discountedPrice": "3000", "expiryDate": "2020-11-13","productImg":"https://kitchen.sayidaty.net/uploads/small/26/26cf0b244730b8cd75b5199a9b10364f_w750_h500.jpg"},
      {"name": "Fries", "discountedPrice": "2000", "expiryDate": "2020-11-08","productImg":"https://www.thedailymeal.com/sites/default/files/story/2018/fries-istock_crop.jpg"},
      {"name": "Salad", "discountedPrice": "5500", "expiryDate": "2020-11-05","productImg":"https://assets.afcdn.com/recipe/20190704/94666_w1024h768c1cx2689cy1920.webp"}
  ],
    "images":"https://tr-images.condecdn.net/image/5JEY2NDxoZg/crop/2040/f/cntlabneh-april2019issue-apr19-stuart-ovenden.jpg"
  })
  
  const BurgerQueen = new Place({
    "title":"Burger Queen",
    "Products":[
      {"name": "Burger", "discountedPrice": "6500", "expiryDate": "2020-11-13","productImg":"https://www.nogarlicnoonions.com/images/article_images/old/best-burgers-lebanon-nogarlicnoonions162014-10-26-09-42-15.jpg"},
      {"name": "Nuggets", "discountedPrice": "4500", "expiryDate": "2020-11-11","productImg":"https://www.nawrasseafood.com/wp-content/uploads/2017/12/chicken-nuggets.jpg"},
      {"name": "Salad", "discountedPrice": "8500", "expiryDate": "2020-11-09","productImg":"https://spoonuniversity.com/wp-content/uploads/sites/216/2016/04/2d30a3f372d2c0a2cf5eb05e7b66ff25.jpg"}
  ],
    "images":"https://i.pinimg.com/originals/5f/93/03/5f9303c8a1127f572b061c7632bb3d77.jpg"
  })

  const Mashawi = new Place({
    "title":"Mashawi",
    "Products":[
      {"name": "grilled meet", "discountedPrice": "27500", "expiryDate": "2020-11-13","productImg":"https://img.atyabtabkha.com/626xDxGlLHeojN628USA-_FKnyQ=/0x0/smart/https://harmony-assets-live.s3.amazonaws.com/image_source/52/a3/52a3da82028642c5d095f69d999cbe9bc998bb63.jpg"},
      {"name": "Tawook", "discountedPrice": "14500", "expiryDate": "2020-11-11","productImg":"https://img-global.cpcdn.com/recipes/fc244d513137e20c/1200x630cq70/photo.jpg"},
      {"name": "Meat Shawarma", "discountedPrice": "6500", "expiryDate": "2020-11-08","productImg":"https://cookingtheglobe.com/wp-content/uploads/2016/07/beef-shawarma.jpg"},
      {"name": "Chicken Shawarma", "discountedPrice": "5500", "expiryDate": "2020-11-06","productImg":"https://i-exc.ccm2.net/iex/1280/1145143113/1064457.jpg"},
      {"name": "’Mashawi Mshakal", "discountedPrice": "5500", "expiryDate": "2020-11-06","productImg":"https://hsaa.hsobjects.com/h/restaurants/android_cover_photos/000/008/156/a116796f6b6dd58ce7905b6947fbef2d-large.jpg"},
      {"name": "Sausage", "discountedPrice": "8500", "expiryDate": "2020-11-09","productImg":"https://d2j8k8fxwhe17j.cloudfront.net/images/slider/%D9%86%D9%82%D8%A7%D9%86%D9%82-%D8%A7%D9%84%D9%84%D8%AD%D9%85-%D8%A7%D9%84%D9%85%D9%82%D9%84%D9%8A%D8%A9.jpeg"}
  ],
    "images":"https://www.thespruceeats.com/thmb/csKei5geFog_oXAe87bNvgTRD0U=/1636x1161/filters:no_upscale():max_bytes(150000):strip_icc()/Fotolia_64296972_M-56a993e65f9b58b7d0fcef33.jpg"
  })

  const Homemade = new Place({
    "title":"Home Made",
    "Products":[
      {"name": "Burger plat", "discountedPrice": "12500", "expiryDate": "2020-11-11","productImg":"https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/09/shake-shack-sauce-recipe-3.jpg?fit=1200%2C879&ssl=1"},
      {"name": "Chicken Sandwish", "discountedPrice": "10000", "expiryDate": "2020-11-09","productImg":"https://veganfoodlover.com/wp-content/uploads/2017/05/vegan-mcdonalds-crispy-chicken-sandwich-recipe.jpg"},
      {"name": "lassaagne", "discountedPrice": "16500", "expiryDate": "2020-11-10","productImg":"https://i1.wp.com/foodforayear.com/wp-content/uploads/2015/07/image238.jpg?fit=3264%2C2448&ssl=1"},
      {"name": "Pizza", "discountedPrice": "5500", "expiryDate": "2020-11-16","productImg":"https://www.superhealthykids.com/wp-content/uploads/2019/08/July-Recipes-26.jpg"},
      {"name": "Italian Submarine", "discountedPrice": "7500", "expiryDate": "2020-11-06","productImg":"https://prods3.imgix.net/images/articles/2017_04/Feature-restaurant-butcher-bakery-shops2.jpg"},
      {"name": "’Fahita Sandwish", "discountedPrice": "800", "expiryDate": "2020-11-06","productImg":"https://potatorolls.com/wp-content/uploads/Chicken-Fajita-Grilled-Cheese.jpg"}
  ],
    "images":"https://www.abestfashion.com/wp-content/uploads/2019/09/Online-Food-Delivery-Takeaway.jpg"
  })
const NewUser = new User({
  "id":1234,
  "name":"Admin",
  "email":"admin@admin.com",
  "password":"admin123",
  "reviews":[{"id":1235213,"description":"Best Service is reached by your web site and cheapest products outhere"},
  {"id":1235214,"description":"Nothing is better than a product that have a cheap price and good taste"}],

})
const reservation1 = new Reservation({
  "userId":1234,"marketName":"Falafelna","reservedBy":"Yara","reservationDate":"Saturday","numberOfPeople":5,"otherComments":"No Comment"
})
const reservation2 = new Reservation({
  "userId":1234,"marketName":"Abou Wadih","reservedBy":"Sandy","reservationDate":"Saturday","numberOfPeople":5,"otherComments":"No Comment"
})
const reservation3 = new Reservation({
  "userId":1234,"marketName":"Mashawi","reservedBy":"Fouad","reservationDate":"Saturday","numberOfPeople":8,"otherComments":"No Comment"
})
const reservation4 = new Reservation({
  "userId":1234,"marketName":"Mashawi","reservedBy":"Pierre","reservationDate":"Saturday","numberOfPeople":15,"otherComments":"No Comment"
})
const reservation5 = new Reservation({
  "userId":1234,"marketName":"Mashawi","reservedBy":"Souad","reservationDate":"Saturday","numberOfPeople":12,"otherComments":"No Comment"
})
const reservation6 = new Reservation({
  "userId":1234,"marketName":"Mashawi","reservedBy":"Robert","reservationDate":"Wednesday","numberOfPeople":7,"otherComments":"No Comment"
})
const reservation7 = new Reservation({
  "userId":1234,"marketName":"Home Made","reservedBy":"Yara","reservationDate":"Saturday","numberOfPeople":2,"otherComments":"No Comment"
})
const reservation8 = new Reservation({
  "userId":1234,"marketName":"Falafelna","reservedBy":"Tony","reservationDate":"Saturday","numberOfPeople":5,"otherComments":"No Comment"
})

const reservation9 = new Reservation({
  "userId":1234,"marketName":"Falafelna","reservedBy":"Yara","reservationDate":"Friday","numberOfPeople":5,"otherComments":"No Comment"
})
const reservation10 = new Reservation({
  "userId":1234,"marketName":"Abou Wadih","reservedBy":"Yara","reservationDate":"Tuesday","numberOfPeople":6,"otherComments":"No Comment"
})

  exports.ZaatarWBhar = ZaatarWBhar;
  exports.AbouWadih = AbouWadih;
  exports.Falafelna = Falafelna;
  exports.BurgerQueen = BurgerQueen;
  exports.Mashawi = Mashawi;
  exports.Homemade = Homemade;
  exports.NewUser = NewUser;
  exports.reservation1 = reservation1;
  exports.reservation2 = reservation2;
  exports.reservation3 = reservation3;
  exports.reservation4 = reservation4;
  exports.reservation5 = reservation5;
  exports.reservation6 = reservation6;
  exports.reservation7 = reservation7;
  exports.reservation8 = reservation8;
  exports.reservation9 = reservation9;
  exports.reservation10 = reservation10;
