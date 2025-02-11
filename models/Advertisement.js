const mongoose = require('mongoose');

const advertisementSchema = new mongoose.Schema({
  title: { type: String, required: true, maxlength: 200 },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  category: { type: String, enum: ['retail', 'fashion', 'production', 'builder', 'harvester'], required: true },
  author: { type: String, required: true },
  contact: { type: String, required: true },
  image: { type: String }
});

advertisementSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Advertisement', advertisementSchema);
