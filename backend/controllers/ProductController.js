const Product = require('../models/Product');
const cloudinary = require('../config/cloudinary');

// Mendapatkan semua product
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Menambahkan product baru
exports.createProduct = async (req, res) => {
  try {
    // Mengunggah file ke Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    // console.log('result', result)

    // Membuat produk dengan data dari body dan menambahkan thumbnail URL
    const product = new Product({
      ...req.body, // Spread operator untuk menambahkan semua data dari body
      thubmnail: result?.secure_url, // Tambahkan URL dari Cloudinary
    });

    // Menyimpan produk ke database
    await product.save();

    // const product = new Product(req.body);
    // await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
