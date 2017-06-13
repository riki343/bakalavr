module.exports = {

  list: function (req, res) {
    Department.find().exec(function (error, resp) {
      return res.view('departments/list', {list: resp});
    });
  },

  adminList: function (req, res) {
    Department.find().exec(function (error, resp) {
      return res.view('departments/admin-list', {list: resp});
    });
  },

  add: function (req, res) {
    var data = req.params.all();

    Department.create(data).exec(function (error, data) {
      return res.redirect('/admin/departments/list');
    });
  },

  remove: function (req, res) {
    var id = req.param('id');

    Department.destroy({id: id}).exec(function (error, data) {
      return res.redirect('/admin/departments/list');
    });
  },

  single: function (req, res) {
    var id = req.param('id');

    Employee.find({department: id}).exec(function (error, data) {
      return res.view('departments/single', {list: data});
    });
  },

  adminSingle: function (req, res) {
    var id = req.param('id');

    Employee.find({department: id}).exec(function (error, data) {
      return res.view('departments/admin-single', {list: data, department: id});
    });
  },

  availableUsers: function (req, res) {
    var id = req.param('id');

    Employee.find({department: {'!': id}}).exec(function (error, data) {
      return res.view('departments/add-user', {list: data, department: id});
    });
  },

  addUser: function (req, res) {
    var id= req.param('departmentId');
    var user = req.param('user');

    Employee.update({id: user}, {department: id}).exec(function (error, data) {
      return res.redirect('/admin/departments/single/' + id);
    });
  },

  detach: function (req, res) {
    var id = req.param('id');

    Employee.find({id: id}).exec(function (error, data) {
      var department = data.department;

      Employee.update({id: data.id}, {department: null}).exec(function (error, data) {
        return res.redirect('/admin/departments/single/' + department);
      });
    });
  }
};

