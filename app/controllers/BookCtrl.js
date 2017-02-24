'use strict';

app.controller("BookCtrl", function($scope, GuideStorage) {

  GuideStorage.getGuides()
  .then(function(guides) {
    console.log('Controller GuideArray: ', guides);
    $scope.books = guides;
    console.log('scope: ', $scope.books);
  });

});
