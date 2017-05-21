angular.module('bakalavr').controller('EmployeeController', ['$http', function ($http) {
  var self = this;

  this.list = [];
  this.autocomplete = '';

  function getEmployee() {
    var promise = $http.get('/employee/list');

    promise.then(function (response) {
      self.list = response.data;
    }, function (error) {
      console.log(error);
    });
  }

  getEmployee();
}]);
