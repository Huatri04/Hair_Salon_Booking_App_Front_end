import React from "react";
import "./index.css";
import { Layout, Menu, theme } from "antd";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/userSlice";
import Home_admin from "../Home_employee";
const { Header, Sider, Content } = Layout;
const Stylist_page = () => {
  const dispatch = useDispatch();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  function getItemLogOut(label, key) {
    return {
      key,
      label: <Link to={`/${key}`}> {label}</Link>,
    };
  }
  function handleMenuClick(e) {
    if (e.key === "loginEmployee") {
      dispatch(logout());
    }
  }
  function getItem(label, key) {
    return {
      key,
      label: <Link to={`/${key}`}> {label}</Link>,
    };
  }

  const items = [
    getItem("Home", "stylistPage"),
    getItem("Tài khoản của tôi", "stylistPage/employee_account"),
    getItem("Thời khóa biểu", "stylistPage/weeklyTimetable"),

    getItem("Quản lý lịch sử danh sách lương", "stylistPage/listhistorysalary"),
    getItemLogOut("Đăng xuất", "loginEmployee"),
  ];
  return (
    <Layout className="layout_container">
      <Sider
        style={{ height: "120vh" }}
        width={300}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          selectedKeys={""}
          onClick={handleMenuClick}
        />
      </Sider>
      <Layout>
        <Header
          className="header_container"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <div className="logo">
            <img
              className="image"
              src="https://firebasestorage.googleapis.com/v0/b/hair-d1f00.appspot.com/o/logo.jpg?alt=media&token=40cbabc8-de6a-4aa4-9315-103363c2ccd1"
              alt=""
            />
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            className="content_container"
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route path="/" element={<Home_admin />} />
            </Routes>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Stylist_page;
