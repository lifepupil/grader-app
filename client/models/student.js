'use strict';

angular.module('grader-app', ['firebase'])
.factory('Student', function($rootScope, $http, nodeUrl, $firebaseObject, $firebaseArray){
  console.log('inside the student factory');

  function Student(){
  }

  Student.add = function(student){
    return $http.post(nodeUrl + '/student');
  };

  return Student;
});
