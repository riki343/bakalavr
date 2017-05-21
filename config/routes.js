module.exports.routes = {
  '/': {
    view: 'homepage'
  },

  '/employee-list': {
    view: 'list'
  },

  '/about': {
    view: 'about'
  },

  'GET /employee/list': 'EmployeeController.list',
  '/employee/single/:id': 'EmployeeController.single'
};
