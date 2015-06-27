'use strict';

angular.module('grader-app')
.factory('Student', function($rootScope, $http, nodeUrl){
  console.log('inside the student factory');

  function Student () {
  };

  Student.add = function(student){
    return $http.post(nodeUrl + '/users');
  };

  return Student;

});
