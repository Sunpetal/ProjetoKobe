(function() {

  //top-level module attached by ng-app
  var app = angular.module('gemStore', ['store-products']); //gemstore depende do store-products

 app.controller('StoreController', ['$http', function($http){
    

    
     var store = this;

    store.products = [];
    $http.get('./store-products.json').then(function(data){
      
     // console.dir(data);
          console.log(data);
      store.products = data;

      });
    
  }]);

app.controller('ReviewController', function() {
  this.review = {};


  this.addReview = function(product) {
     this.review.createdOn = Date.now();
    product.reviews.push(this.review);
      this.review = {};
  };

});



  var gems = [{
    name: 'Azurite',
    description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
    shine: 8,
    price: 110.50,
    rarity: 7,
    color: '#CCC',
    faces: 14,
    images: [
      "img/gem-01.jpg",
      "img/gem-02.jpg",
      "img/gem-03.jpg" ],
    reviews: [
    {
      stars: 5,
      body: "love this product",
      author: "joe@gmail.com",
      createdOn: 1397490980837
    },
     {
      stars: 5,
      body: "love this product",
      author: "joe@gmail.com",
      createdOn: 1397490980837
    } ], 
  }, {
    name: 'Bloodstone',
    description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
    shine: 9,
    price: 22.90,
    rarity: 6,
    color: '#EEE',
    faces: 12,
    images: [
      "img/gem-04.jpg",
      "img/gem-05.jpg",
      "img/gem-06.jpg"
    ],
   reviews:[  {
      stars: 5,
      body: "love this product",
      author: "joe@gmail.com",
      createdOn: 1397490980837
    }]
  }, {
    name: 'Zircon',
    description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
    shine: 70,
    price: 1100,
    rarity: 2,
    color: '#000',
    faces: 6,
    images: [
    "img/gem-07.jpg",
      "img/gem-08.jpg",
      "img/gem-01.jpg"
    ],
    reviews:[ {
      stars: 5,
      body: "love this product",
      author: "joe@gmail.com",
      createdOn: 1397490980837
    }]
  }];
})();