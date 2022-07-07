import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { BsPeopleFill } from "react-icons/bs";
import { FiMinimize2, FiMaximize2 } from "react-icons/fi";
import { Layout, Button, Row, Col, Divider, Typography } from "antd";
import styles from "../styles/Layout.module.css";
import NavItem from "../components/NavItem";

const { Sider, Content } = Layout;
const { Title } = Typography;

export default function Basic({ children }) {
  const [collapse, setCollapse] = useState(true);

  return (
    <Layout>
      <Sider
        collapsed={collapse}
        style={{ backgroundColor: "#1B2430" }}
        className={styles.sidebar}
      >
        <Row justify="center">
          <Button onClick={() => setCollapse(!collapse)} type="primary">
            {collapse ? (
              <FiMaximize2 style={{ fontSize: "20px" }} />
            ) : (
              <FiMinimize2 style={{ fontSize: "20px" }} />
            )}
          </Button>
        </Row>
        <Divider />
        <NavItem
          link="/"
          title="Home"
          icon={<AiFillHome />}
          isCollapse={collapse}
        />
        <NavItem
          link="/about"
          title="About"
          icon={<BsPeopleFill />}
          isCollapse={collapse}
        />
        <NavItem
          link="/contact"
          title="Contact"
          icon={<IoMdContact />}
          isCollapse={collapse}
        />
      </Sider>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
