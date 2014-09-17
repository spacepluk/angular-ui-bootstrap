var angular = require('angular');

angular.module('ui.bootstrap.alert', [])

.controller('AlertController', ['$scope', '$attrs', function ($scope, $attrs) {
  $scope.closeable = 'close' in $attrs;
}])

.directive('alert', function () {
  return {
    restrict:'EA',
    controller:'AlertController',
    template: require('./alert.html'),
    transclude:true,
    replace:true,
    scope: {
      type: '@',
      close: '&'
    }
  };
});

module.exports = 'ui.bootstrap.alert';

