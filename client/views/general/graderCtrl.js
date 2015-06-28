'use strict';

angular.module('grader-app')
.controller('gradingCtrl', function($scope){
  console.log('inside the graderCtrl');

  $scope.students = ['john', 'mary', 'fred', 'jose'];

  $scope.addStudent = function(student){
    console.log('student', student);
    Student.add(student);
  }

});
