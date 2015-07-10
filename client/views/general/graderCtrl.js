'use strict';

angular.module('grader-app')
.controller('gradingCtrl', function($scope, Student){
  console.log('inside the graderCtrl');

  $scope.students = [
    {
      name: 'john',
      id: 1,
      cohort: 'April 2015'
    },
    {
      name: 'mary',
      id: 2,
      cohort: 'April 2015'
    },
    {
      name: 'fred',
      id: 3,
      cohort: 'April 2015'
    },
    {
      name: 'jose',
      id: 4,
      cohort: 'April 2015'
    }
  ];

  $scope.addStudent = function(student){
    console.log('student', student);
    $scope.students.push(student);
    Student.add(student);
  };
});
