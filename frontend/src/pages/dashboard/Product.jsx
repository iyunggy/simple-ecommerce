import React, { useEffect, useState } from "react";
import { Table, Button, Image } from "antd";
import axios from "axios";
import { URL_PRODUCT } from "../../utils/Endpoint";
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
      title: "Thumbnail",
      dataIndex: "thumbnail",
      render: (_, record) => {
        console.log("recor", record);
        return <Image src={record?.thumbnail} width={100} loading='lazy' />;
        // if (record.thumbnail) {
        //   // return <Image src={record.thumbnail} loading='lazy' />;

        // }
      },
    },
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
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button
          type='primary'
          danger
          onClick={() => {
            console.log("id", record?._id);
            axios
              .delete(`${URL_PRODUCT}/${record?._id}`)
              .then((res) => {
                console.log(res);
                window.location.reload();
              })
              .catch((err) => console.log("err", err));
          }}>
          Delete
        </Button>
      ),
    },
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
