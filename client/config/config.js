'use strict';

angular.module('grader-app')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('new-assignment', {url: '/new-assignment', templateUrl: '/views/general/new-assignment.html', controller: 'gradingCtrl'})
  .state('grade-entry', {url: '/grade-entry', templateUrl: '/views/general/grade-entry.html', controller: 'gradingCtrl'})
  .state('add-student', {url: '/add-student', templateUrl: '/views/general/add-student.html', controller: 'gradingCtrl'})
  .state('grade-display', {url: '/grade-display', templateUrl: '/views/general/grade-display.html', controller: 'gradingCtrl'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'});
});
