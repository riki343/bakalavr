module.exports = {
  list: function (req, res) {
    Employee.find().exec(function (error, resp) {
      return res.json(resp);
    });
  },

  adminList: function (req, res) {
    Employee.find().exec(function (error, resp) {
      return res.view('employee/admin-list', {list: resp});
    });
  },

  single: function (req, res) {
    Employee.findOne({id: req.param('id')}).exec(function (error, resp) {
      return res.view('employee/single', {user: resp});
    });
  },

  add: function (req, res) {
    var data = req.params.all();
    var file = req.file('photo');
    data.birthdate = new Date(data.birthdate);

    if (!data || !file) {
      return res.redirect('/employee-list');
    }

    Employee.create(data).exec(function (error, model) {
      if (error) {
        return res.serverError(error);
      }

      Employee.uploadImages(file, model, function (error, data) {
        if (error) {
          return res.serverError(error);
        }

        return res.redirect('/admin/employee/list');
      });
    });
  },

  remove: function (req, res) {
    var id = req.param('id');

    Employee.destroy({id: id}).exec(function (error, data) {
      return res.redirect('/admin/employee/list');
    });
  },

  removeAll: function (req, res) {
    Employee.destroy(function (error, records) {
      return res.json({"message": "All users was deleted"});
    });
  }
};