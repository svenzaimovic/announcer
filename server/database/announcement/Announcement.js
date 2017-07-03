var mongoose = require('mongoose');
  
var AnnouncementSchema = new mongoose.Schema({  
  title: String,
  sender: String,
  datetime: String,
  content: String
});

mongoose.model('Announcement', AnnouncementSchema);
module.exports = mongoose.model('Announcement');