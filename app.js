var app = angular.module("app", ["xeditable", "ngTagsInput", 'ngAutocomplete']);

app.controller('AutoCompleteCtrl', function($scope, $http) {
  $scope.vm = {
    address: {}
  };

  $scope.saveAddress = function() {
    console.log('save');
  }

});
