module.exports.routes = {

  '/': {
    view: 'homepage'
  },

  '/employee-list': {
    view: 'employee/list'
  },

  '/about': {
    view: 'about'
  },

  '/departments/single/:id': 'DepartmentController.single',
  '/employee/single/:id':    'EmployeeController.single',
  'GET /employee/list':      'EmployeeController.list',
  '/departments':            'DepartmentController.list',


  // Admin
  '/admin': {
    view: 'admin'
  },

  // Departments
  '/admin/departments/new': {
    view: 'departments/add'
  },

  '/admin/departments/list':       'DepartmentController.adminList',
  '/admin/departments/single/:id': 'DepartmentController.adminSingle',
  '/admin/departments/remove/:id': 'DepartmentController.remove',
  '/admin/departments/detach/:id': 'DepartmentController.detach',
  'POST /departments/add':         'DepartmentController.add',
  '/admin/departments/add-user/:id': 'DepartmentController.availableUsers',
  '/admin/departments/attach/:departmentId': 'DepartmentController.addUser',

  // Employee
  '/admin/employee/new': {
    view: 'employee/add'
  },

  '/admin/employee/list': 'EmployeeController.adminList',
  'POST /employee/add':   'EmployeeController.add'
};
