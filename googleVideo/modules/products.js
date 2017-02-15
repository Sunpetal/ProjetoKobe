(function(){
 //all the functionality for products
var app = angular.module('store-products',[]);
app.directive('productTitle', function(){
  return{
    restrict: 'E', //element
    templateUrl: "./directives/product-title.html"

  };
});

app.directive("productSpecs", function() {
  return {
    restrict:"A",
    templateUrl: "./directives/product-specs.html"
  };
});
 app.directive("productReviews", function() {
    return {
      restrict: 'E',
      templateUrl: "./directives/product-reviews.html"
    };
  });
//--------------------------------------------------------
 //  app.controller('panelController', function(){    //--> deixva isso quando deixava no codigo o que ta em baixo ali
 //  });
 // <product-panels ng-controller="panelController as panel">
 //         </product-panels> 

app.directive("productPanels",function(){
    return{
      restrict: 'E',
      templateUrl: './directives/product-panels.html',
      controller: function(){
         this.tab = 1;

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
        },
      controllerAs:'panel' //ng-controller="panelController as panel"
      };

      });
  
//------------------------------------------------------------------
  // app.controller('GalleryController', function(){
  //   this.current = 0;

  //   this.setCurrent = function(index){
  //     this.current = index;
  //   };
  // });


app.directive("productGallery", function(){
  return{
    restrict: 'E',
    templateUrl: './directives/product-gallery.html',
    controller: function(){
       this.current = 0;
    this.setCurrent = function(index){
      this.current = this.current = index || 0;
    };
  },
    controllerAs: 'gallery'
    };
});
  
//------------------------------------------------------------------
})();