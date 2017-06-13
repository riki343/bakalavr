var fs = require('fs');
var fse = require('fs-extra');
var shortid = require('shortid');
var dir = sails.config.appPath + '/assets/images/';
var tempDir = sails.config.appPath + '/.tmp/public/images/';

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
      type: 'string'
    },

    department: {
      model: 'Department'
    }
  },

  uploadImages(photo, user, cb) {
    // Check if folder for current tale is exist
    if (!fs.existsSync(dir + user.id)){
      fs.mkdirSync(dir + user.id);
    }

    // Check if it's exist in .tmp folder
    if (!fs.existsSync(tempDir + user.id)) {
      fs.mkdirSync(tempDir + user.id);
    }

    // Generate unique filename
    var photoName = shortid.generate() + photo._files[0].stream.filename;
    var dirname = dir + user.id;
    var tempDirName = tempDir + user.id;

    user.photo = '/images/' + user.id + '/' + photoName;
    photo.upload({dirname: dirname, saveAs: photoName}, function(err, files) {
      fse.copySync(dirname + '/' + photoName, tempDirName + '/' + photoName);
    });

    user.save(cb);
  },

  settings: {
    autoPK: true,
    autoCreatedAt: true,
    autoUpdatedAt: true
  },

  beforeCreate: function (values, cb) {
    values.department = null;
    cb();
  }
};

