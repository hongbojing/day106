var app = angular.module('myApp', ['ngAnimate', 'ngSanitize', 'mgcrea.ngStrap']);



angular.module('myApp')
    .config(function($modalProvider) {
        angular.extend($modalProvider.defaults, {
            html: true
        });
    })
    .controller('myController', function($modal) {
        var vm = this;
        vm.modal = {title: 'Title', content: 'Hello Modal<br />This is a multiline message!'};

        // Controller usage example
        //
        function MyModalController() {
            vm.title = 'Some Title';
            vm.content = 'Hello Modal<br />This is a multiline message from a controller!';
        }


    });
