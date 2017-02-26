/**
 * Angular Controller: ClientController
 *
 * Client Controller
 */
(function() {
    
    'use strict';

    angular
        .module('joor-test')
        .controller('MusicController', MusicController);

    function MusicController($rootScope, $scope, $state, $stateParams, $window, $compile, $sce, $timeout) {
        $scope.name = 'World';
        $scope.data = $window.data;
        $scope.itunesQuery = '';
        $scope.itunesCollectionQuery = $stateParams.id;
        $scope.itunesScript = '';
        $scope.results = [];
        $scope.collection_results = [];
        $scope.currentPlayedUrl = '';

        console.log($stateParams);

        $scope.itunesCallback = function (response) {
            var tmp = [];
            // $scope.results = [];
            tmp.push(response);
            $scope.results = tmp[0];
            console.log($scope.results);
        }

        $scope.itunesCollectionCallback = function (response) {
            var tmp_collection = [];
            tmp_collection.push(response);
            $scope.collection_results = tmp_collection[0];
            console.log($scope.collection_results);
        }

        $scope.trustAsResourceUrl = function (url) {
            if (url) {
                return $sce.trustAsResourceUrl(url);
            }
        }

        $scope.playAudio = function($event, song) {
            if (!$($event.currentTarget).hasClass('clicked')) {
                $scope.currentPlayedUrl = song.previewUrl;
                audio.load();
                $timeout(function () {
                    audio.play();

                    $($($event.currentTarget)[0].childNodes[1]).removeClass('glyphicon-play'); 
                    $($($event.currentTarget)[0].childNodes[1]).addClass('glyphicon-pause'); 
                }, 0);

                $('.boxes').removeClass('clicked');
                $($event.currentTarget).addClass('clicked');
            }  else {
                audio.pause();

                $($event.currentTarget).removeClass('clicked');

                $($($event.currentTarget)[0].childNodes[1]).removeClass('glyphicon-pause');
                $($($event.currentTarget)[0].childNodes[1]).addClass('glyphicon-play'); 
            }
        };
    }
    
})();