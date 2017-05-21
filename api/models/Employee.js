/**
 * Employee.js
 */

module.exports = {
  connection: 'localDiskDb',

  attributes: {
    firstName: {
      type: 'string',
      size: 255
    },

    middleName: {
      type: 'string',
      size: 255
    },

    lastName: {
      type: 'string',
      size: 255
    },

    photo: {
      type: 'string',
      size: 255
    },

    birthdate: {
      type: 'date'
    },

    workingDays: {
      type: 'string',
      size: 512
    },

    experience: {
      type: 'int'
    },

    number: {
      type: 'string',
      size: 50
    },

    position: {
      type: 'string',
      enum: [
        'Невролог',
        'Педіатр',
        'Фізіотерапевт',
        'Хірург',
        'Травматолог',
        'Уролог',
        'Гінеколог',
        'Дерматолог',
        'Окуліст',
        'Педіатр',
        'Кардіолог'
      ]
    }
  },

  settings: {
    autoPK: true,
    autoCreatedAt: true,
    autoUpdatedAt: true
  }
};

