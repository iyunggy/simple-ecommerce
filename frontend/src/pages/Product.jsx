import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import axios from "axios";
import { URL_PRODUCT } from "../utils/Endpoint";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(URL_PRODUCT)
      .then((res) => {
        console.log("res", res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setLoading(false);
      });
  }, []);

  // Kolom untuk tabel
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    // {
    //   title: "Category",
    //   dataIndex: "category",
    //   key: "category",
    // },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Button type='primary' danger>
    //       Delete
    //     </Button>
    //   ),
    // },
  ];

  return (
    <div>
      <h1>List Product</h1>
      <Link to='/dashboard/products/create'>
        <Button type='primary'>Tambah</Button>
      </Link>
      <Table dataSource={products} columns={columns} loading={loading} />
    </div>
  );
};

export default Product;
