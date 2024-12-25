import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout, Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Product from "./pages/Product";
import AddProduct from "./pages/ProductCreate";

const { Header, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path='/signin' element={<Login />} />

        {/* Protected Routes - Dashboard */}
        <Route
          path='/dashboard/*' // Tambahkan * untuk nested routes di dalam dashboard
          element={
            <Layout style={{ minHeight: "100vh" }}>
              {/* Sidebar */}
              <Sidebar collapsed={collapsed} />

              {/* Main Content */}
              <Layout>
                <Header
                  style={{
                    padding: 0,
                    background: "#fff",
                    boxShadow: "0 2px 8px #f0f1f2",
                  }}>
                  <Button
                    type='text'
                    icon={
                      collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                    onClick={toggleSidebar}
                    style={{ fontSize: "16px", marginLeft: "16px" }}
                  />
                </Header>
                <Content
                  style={{
                    margin: "16px",
                    padding: "16px",
                    background: "#fff",
                    minHeight: "280px",
                  }}>
                  <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/products' element={<Product />} />
                    <Route path='/products/create' element={<AddProduct />} />
                  </Routes>
                </Content>
              </Layout>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;