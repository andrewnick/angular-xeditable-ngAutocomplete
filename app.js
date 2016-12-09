var app = angular.module("app", ["xeditable", "ngTagsInput", 'ngAutocomplete']);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.controller('AutoCompleteCtrl', function($scope, $http) {
  $scope.vm = {
    address: {}
  };

  $scope.saveAddress = function() {
    console.log('save');
  }

});
