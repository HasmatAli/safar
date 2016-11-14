angular.module('app', [
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'vsGoogleAutocomplete',
        require('../compositions/hello-world-module.js')
    ])
    .config(require('../routes/routes'))
    .constant('appName', 'app')
    .run(function ($rootScope, $log) {
        $rootScope.$on(function sessionExpiredListener() {
            $log.debug('session expired');
            // TODO: Node module for frame communication messages?
            // TODO: Domain checking
            top.postMessage('_SESSION_EXPIRED_', '*');
        });
    });