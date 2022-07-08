import React from "react";
import { Typography, Button, Row } from "antd";
import { FaLinkedin } from "react-icons/fa";

const { Title, Text } = Typography;

export default function Contact() {
  return (
    <div>
      <Title style={{ textAlign: "center", marginBottom: "20px" }} level={3}>
        Contact Page
      </Title>
      <Row justify="center">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/andry-pebrianto/"
          rel="noreferrer"
        >
          <Button type="primary">
            <FaLinkedin />{" "}
            <Text style={{ marginLeft: "5px", color: "white" }}>Linkedin</Text>
          </Button>
        </a>
      </Row>
    </div>
  );
}
