/**
 * Angular Controller: ClientController
 *
 * Client Controller
 */
(function() {
    
    'use strict';

    angular
        .module('joor-test')
        .controller('CollectionController', CollectionController);

    function CollectionController($rootScope, $scope, $state, $stateParams, $window, $compile, $sce, $timeout) {
        $scope.name = 'World';
        $scope.data = $window.data;
        $scope.itunesCollectionQuery = $stateParams.id;
        $scope.itunesScript = '';
        $scope.collection_results = [];
        $scope.totalTime = 0;


        $scope.itunesCollectionCallback = function (response) {
            var tmp_collection = [];
            for (var key in response.results) {
                tmp_collection.push(response.results[key]);
            }
            $scope.collection_results = tmp_collection;

            for (var collect in $scope.collection_results) {
                if ($scope.collection_results[collect].trackTimeMillis) {
                    $scope.totalTime += $scope.collection_results[collect].trackTimeMillis;   
                }
            }
            $scope.$digest($scope.totalTime);
            $scope.$digest($scope.collection_results);
        }

       
    }
    
})();