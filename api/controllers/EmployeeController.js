/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  list: function (req, res) {
    Employee.find().exec(function (error, resp) {
      return res.json(resp);
    });
  },

  single: function (req, res) {
    Employee.findOne({id: req.param('id')}).exec(function (error, resp) {
      return res.view('single', {user: resp});
    });
  },

  add: function (req, res) {
    var data = req.params.all();

    data.birthdate = new Date(data.birthdate);

    Employee.create(data).exec(function (error, model) {
      if (error) {
        return res.serverError(error);
      }

      return res.json({'message': 'User created!'});
    });
  },

  removeAll: function (req, res) {
    Employee.destroy(function (error, records) {
      return res.json({"message": "All users was deleted"});
    });
  }
};
