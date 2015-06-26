'use strict';

angular.module('grader-app')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html'})
  .state('new-assignment', {url: '/about', templateUrl: '/views/general/new-assignment.html', controller: 'gradingCtrl'})
  .state('grade-entry', {url: '/faq', templateUrl: '/views/general/grade-entry.html', controller: 'gradingCtrl'})
  .state('add-student', {url: '/faq', templateUrl: '/views/general/add-student.html', controller: 'gradingCtrl'})
  .state('grade-display', {url: '/faq', templateUrl: '/views/general/grade-display.html', controller: 'gradingCtrl'})
  .state('register', {url: '/register', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/users.html', controller: 'UsersCtrl'});
});
