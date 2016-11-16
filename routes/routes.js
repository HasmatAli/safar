export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('default', {
            url: '/?token',
            template: '<hello-world></hello-world>',
            controller: stateController,
            controllerAs: 'launch'
        })
        .state('default.home', {
            url: '/home',
            templateUrl: '../components/hello-world/home-page.html'
        })
        .state('default.login', {
            url: '/login',
            templateUrl: '../components/hello-world/login-form.html'
        })
        .state('default.forget', {
            url: '/forget',
            templateUrl: '../components/hello-world/forget.html'
        })
        .state('default.Step-1', {
            url: '/Step-1',
            templateUrl: '../components/hello-world/step-one.html'
        })
        .state('default.Step-2', {
            url: '/Step-2',
            templateUrl: '../components/hello-world/step-two.html'
        })
        .state('default.Step-3', {
            url: '/Step-3',
            templateUrl: '../components/hello-world/step-three.html'
        })
        .state('default.registraion', {
            url: '/registraion',
            templateUrl: '../components/hello-world/registraion.html'
        })
        .state('default.registationDone', {
            url: '/registationDone',
            templateUrl: '../components/hello-world/registation-done.html'
        })
}

function stateController($scope, appName) {
    'ngInject';
    this.data = {};
}