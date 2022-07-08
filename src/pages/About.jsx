import React from "react";
import { Col, Image, Row, Typography } from "antd";

const { Title } = Typography;

export default function About() {
  return (
    <div>
      <Title style={{ textAlign: "center", marginBottom: "20px" }} level={3}>
        About Page
      </Title>
      <Row justify="center">
        <Col span={6} style={{ textAlign: "center" }}>
          <Image
            width={200}
            src="https://avatars.githubusercontent.com/u/72940944?s=400&u=ab89473c5b802a06d59c85c85c3071373bce24d5&v=4"
            style={{ borderRadius: "100px" }}
          />
        </Col>
      </Row>
      <Title style={{ textAlign: "center", marginTop: "10px" }} level={5}>
        Andry Pebrianto
      </Title>
    </div>
  );
}
