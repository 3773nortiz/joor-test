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
        $scope.currentPlayedUrl = '';

        console.log($stateParams);

        $scope.itunesCallback = function (response) {
            var tmp = [];
            tmp.push(response);
            $scope.results = tmp[0];
            $scope.$digest($scope.results);
        }

        $scope.itunesCollectionCallback = function (response) {
            var tmp_collection = [];
            tmp_collection.push(response);
            $scope.collection_results = tmp_collection[0];
        }

        $scope.trustAsResourceUrl = function (url) {
            if (url) {
                return $sce.trustAsResourceUrl(url);
            }
        }

        $scope.playAudio = function($event, song) {
            if ($($($event.currentTarget)[0].childNodes[1]).hasClass('glyphicon-play')) {
                $scope.currentPlayedUrl = song.previewUrl;
                audio.load();
                $timeout(function () {
                    audio.play();

                    $('.boxes + .overlay > .glyphicon').removeClass('glyphicon-pause').addClass('glyphicon-play');
                    $($($event.currentTarget)[0].childNodes[1]).removeClass('glyphicon-play').addClass('glyphicon-pause');
                }, 0);
            }  else {
                audio.pause();

                $($event.currentTarget).removeClass('clicked');
                $($($event.currentTarget)[0].childNodes[1]).removeClass('glyphicon-pause').addClass('glyphicon-play');
            }

            audio.addEventListener("ended", function(){
                 audio.currentTime = 0;
                 
                $($($event.currentTarget)[0].childNodes[1]).removeClass('glyphicon-pause').addClass('glyphicon-play');
            });
        };
    }
    
})();