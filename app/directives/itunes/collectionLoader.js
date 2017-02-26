/**
 * Angular Directive: itunesLoader
 *
 * itunes Loader Directive
 */
(function() {
    'use strict';
    angular
        .module('joor-test')
        .directive('collectionLoader', collectionLoader);

    function collectionLoader($rootScope, $state, NG_PATH, $compile, $filter)  {

        var directive = {
            restrict: 'AE', 
            scope: {
              query: '=itunesCollectionQuery',
              callback: '=itunesCollectionCallback',
              controller: '=itunesController'
            },
            template: '<script ng-src="{{query | itunesCollectionUrl: \'itunesCollectionCallback\'}}"></script>',
            link: _Link
        };

        return directive;

    // ===================================== //
    //            DIRECTIVE FUNCTION         //
    // ===================================== //
        
        /**
         * Access: Private
         * Function: Link
         *
         * Directive Function
         *
         * Parameter(s):
         * 
         *     (Object) $scope - Angular $scope object.
         *     (Object) element - jqLite-wrapped element that this directive matches.
         *     (Object) attrs - hash object with key-value pairs of normalized attribute names
         *                      and their corresponding attribute values.
         */
        function _Link(scope, element, attrs) {
            var ele;
            scope.$watch('query', function () {

              ele = element.contents().remove();
              window.itunesScope = angular.element(document.querySelector('[ng-controller=' + scope.controller + ']')).scope();
              
              var script = document.createElement('script');
              script.type = 'text/javascript';
              script.src = $filter('itunesCollectionUrl')(scope.query, 'itunesScope.' + scope.callback);
              
              element.append(script);
              
              $compile(element.contents())(scope);
            });
        }

    }
    
})();