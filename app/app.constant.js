/**
 * Angular Dependency: joor-test.constants
 *
 * This file contains variable constants.
 *
 * CAUTION: Don't edit/remove the constants, unless you know what you're doing.
 */
(function() {
    'use strict';
    angular.module('joor-test')
        .constant('APP_PATH', {
            BASE_URL: '/music',
        })
        .constant('NG_PATH', {
            DIRECTIVES: 'app/directives/',
            FACTORIES: 'app/factories/',
            SERVICES: 'app/services/',
            CONTROLLER: 'app/controller/'
        });
})();