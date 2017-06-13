module.exports = {
  attributes: {
    name: {
      type: 'string',
      size: 255
    },

    employee: {
      collection: 'employee',
      via: 'department'
    }
  }
};

