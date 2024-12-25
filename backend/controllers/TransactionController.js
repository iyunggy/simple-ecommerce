const Transaction = require("../models/Transaction");
const midtransClient = require("midtrans-client");

// Menambahkan product baru
exports.createTransaction = async (req, res) => {
  try {
    const { first_name, amount } = req.body;
    // Create Snap API instance
    let snap = new midtransClient.Snap({
      // Set to true if you want Production Environment (accept real transaction).
      isProduction: false,
      serverKey: "xx",
    });

    const order_id = "ORDER-" + new Date().getTime() // Order ID unik
    // Parameter transaksi
    const parameter = {
      transaction_details: {
        order_id: order_id,
        gross_amount: amount,
      },
      credit_card: {
        secure: true,
      },
      customer_details: {
        first_name: first_name,
      },
    };

    // Tunggu transaksi selesai
    const transaction = await snap.createTransaction(parameter);

    // Ambil redirect URL dari Midtrans
    const transactionUrl = transaction.redirect_url;

    // Simpan transaksi ke database
    const newTransaction = new Transaction({
      ...req.body, // Data transaksi lainnya
      midtrans_url: transactionUrl, // URL pembayaran dari Midtrans
      transaction_id: order_id
    });

    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
