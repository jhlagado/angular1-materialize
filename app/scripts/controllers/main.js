'use strict';
angular.module('appApp').controller('MainCtrl', function($scope, $route) {
    
    $scope.route = $route;

    $scope.routes = [{
        url: '/buttons',
        name: 'Buttons'
    }, {
        url: '/chips',
        name: 'Chips'
    }, {
        url: '/collapsible',
        name: 'Collapsible'
    }, {
        url: '/dialogs',
        name: 'Dialogs'
    }, {
        url: '/dropdown',
        name: 'Dropdown'
    }, {
        url: '/forms',
        name: 'Forms'
    }, {
        url: '/tabs',
        name: 'Tabs'
    }, {
        url: '/datepicker',
        name: 'DatePicker'
    }, {
        url: '/nodelbindings',
        name: 'ModelBindings'
    }];
    $scope.chipsInit = {
        data: [{
            tag: 'Apple',
        }, {
            tag: 'Microsoft',
        }, {
            tag: 'Google',
        }],
    };
    $scope.chipsPlaceholder = {
        placeholder: '+Tag',
        secondaryPlaceholder: 'Enter a tag',
    };
    $scope.firstName = "";
    $scope.selectedOption = "";
    $scope.selectOptions = [{
        value: 1,
        name: "Option 1"
    }, {
        value: 2,
        name: "Option 2"
    }, {
        value: 3,
        name: "Option 3"
    }]
});
