(function() {

    'use strict';

    angular
        .module('joor-test')
        .config(AppConfig);

    function AppConfig($stateProvider, $urlRouterProvider, $locationProvider, NG_PATH) {

        /**
         * Default Routes
         */
        $urlRouterProvider
            .when('', '/music')
            .when('/', '/music')
            .otherwise('/page-not-found');

        /**
         * Application Routes
         *
         * This is where you'll define the different state/routes of your app.
         */
        $stateProvider

        // Music Route
        .state({
            name: 'music',
            url: '/music',
            templateUrl: NG_PATH.CONTROLLER + 'music/template.html'
        }).state({
            name: 'collection',
            url: '/collection/:id',
            templateUrl: NG_PATH.CONTROLLER + 'collection/template.html'
        });

    }

})();
