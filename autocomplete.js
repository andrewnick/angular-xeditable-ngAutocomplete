/*
 Google Autocomplete xedited directive for AngularJS 1.4.8
 https://github.com/DmitryEfimenko/ngAutocomplete
 */
angular.module('xeditable').directive('editableNgAutocomplete', ['editableDirectiveFactory', 'editableUtils',
  function(editableDirectiveFactory, editableUtils) {
    var dir = editableDirectiveFactory({
        directiveName: 'editableNgAutocomplete',
        inputTpl: '<input ng-autocomplete style="width: 100%"></input>',
        render: function () {
            this.parent.render.call(this);
        }
    });

    var linkOrg = dir.link;

    dir.link = function (scope, el, attrs, ctrl) {
        return linkOrg(scope, el, attrs, ctrl); 
    };

    return dir;
}]);