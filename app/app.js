/**
 * Angular App: joor-test
 *
 * This is the app base file/kickstarter.
 * You can add necessary depencies if necessary/needed.
 *
 * CAUTION: Don't edit/remove the dependencies, unless you know what you're doing.
 */
(function() {
    'use strict';
    angular.module('joor-test', [
    	'ui.router'
    ]).filter('itunesUrl', ['$sce', function($sce) {
        return function(val, callback) {
            return $sce.trustAsResourceUrl('https://itunes.apple.com/search?term=' + encodeURIComponent(val) + '&country=US&media=music&callback=' + callback);
        };
    }]).filter('itunesCollectionUrl', ['$sce', function($sce) {
        return function(val, callback) {
            return $sce.trustAsResourceUrl('https://itunes.apple.com/lookup?id=' + encodeURIComponent(val) + '&entity=song&callback=' + callback);
        };
    }]).filter('formatDuration', function () {
        return function (input) {
            var totalHours, 
                totalMinutes, 
                totalSeconds, 
                hours,
                minutes, 
                seconds, 
                result='';

            var millis = 1000;
            var constant = 60;

            totalSeconds = input / millis;
            totalMinutes = totalSeconds / constant;
            totalHours = totalMinutes / constant;

            seconds = Math.floor(totalSeconds) % constant;
            minutes = Math.floor(totalMinutes) % constant;
            hours = Math.floor(totalHours) % constant;

            if (hours !== 0) {
                result += hours + ':';
                if (minutes.toString().length == 1) {
                    minutes = '0' + minutes;
                }
            }
            result += minutes +':';

            if (seconds.toString().length == 1) {
                seconds = '0' + seconds;
            }
            result += seconds;
            return result;
        };
    });
})();