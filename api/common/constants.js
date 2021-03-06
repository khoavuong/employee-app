// Load .env (Only for non-production environments)
if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

exports.NODE_ENV = process.env.NODE_ENV || 'production';
exports.PORT = process.env.PORT || 2000;
exports.AWS_PROFILE = process.env.AWS_PROFILE || 'default';
exports.PHOTOS_BUCKET = process.env.PHOTOS_BUCKET || 'khoa-bucket-203';
exports.DEFAULT_AWS_REGION = process.env.DEFAULT_AWS_REGION || 'ap-southeast-1';
exports.SHOW_WARNINGS = process.env.SHOW_WARNINGS || 1;
exports.SHOW_ADMIN_TOOLS = process.env.SHOW_ADMIN_TOOLS || 1;
exports.TABLE_NAME = 'Employees';
