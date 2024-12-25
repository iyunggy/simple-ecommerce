const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

dotenv.config();

// Konfigurasi Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// cloudinary.config({
//   cloud_name: 'dhlggpybo',
//   api_key: '824997659789461',
//   api_secret: '0AzNwQwDz92ykz4Q_V5N3HyW7GY',
// });

module.exports = cloudinary;
