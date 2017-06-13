angular.module('bakalavr').controller('EmployeeAddController', ['$http', function ($http) {
  var self = this;

  this.model = {
    firstName: '',
    middleName: '',
    lastName: '',
    birthdate: '',
    workingDays: '',
    experience: 5,
    number: '',
    position: '',
    photo: ''
  };

  this.addEmployee = function () {
    var promise = $http.post('/employee/add', this.model);

    promise.then(function (response) {
      console.log(response);
    }, function (error) {
      console.log(error);
    });
  }
}]);
