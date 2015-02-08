/**
 * Created by Vivek on 07-02-2015.
 */

'use strict';

angular.module('healthyLivingApp')
  .directive('numberOnly', function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function (scope, element, attr, ctrl) {
        function inputValue(val) {
          if (val) {
            //var digits=val.replace(/^(\d{1})^(\d{5})\-(\d{4})$/,'');
            var digits = val.replace(/[^0-9]/g, '');
            var asInt=parseInt(digits);

            var min = parseInt(attr.min);
            if (min !== NaN && asInt < min) {
              return false;
            }

            var max = parseInt(attr.max);
            if (max !== NaN && max < asInt) {
              return false;
            }

            if (digits !== val) {
              ctrl.$setViewValue(digits);
              ctrl.$render();
            }
            return parseInt(digits);
          }
          return undefined;
        }

        ctrl.$parsers.push(inputValue);
      }
    };
  })
;
