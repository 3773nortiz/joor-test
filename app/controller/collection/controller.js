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
        $scope.currentPlayedUrl = '';


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

        $scope.trustAsResourceUrl = function (url) {
            if (url) {
                return $sce.trustAsResourceUrl(url);
            }
        }


        $scope.playAudio = function($event, song) {
            if ($($($event.currentTarget)[0]).hasClass('glyphicon-play')) {
                $scope.currentPlayedUrl = song.previewUrl;
                audio1.load();
                $timeout(function () {
                    audio1.play();

                    $('.boxes .glyphicon').removeClass('glyphicon-pause').addClass('glyphicon-play');
                    $($($event.currentTarget)[0]).removeClass('glyphicon-play').addClass('glyphicon-pause');
                }, 0);
            }  else {
                audio1.pause();
                $($event.currentTarget).removeClass('clicked');
                $($($event.currentTarget)[0]).removeClass('glyphicon-pause').addClass('glyphicon-play');
            }

            audio1.addEventListener("ended", function(){
                 audio1.currentTime = 0;
                 console.log('ended');
                $($($event.currentTarget)[0]).removeClass('glyphicon-pause').addClass('glyphicon-play');
            });
        };

       
    }
    
})();