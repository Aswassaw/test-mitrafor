import React from "react";
import { Link, useParams } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { Space, Typography, Image, Divider, Button } from "antd";
import data from "../data/product.json";

const { Title, Text } = Typography;

export default function Detail() {
  const urlParams = useParams();

  const productDetail = data.filter((product) => {
    return product.id == urlParams.id;
  });

  if (!productDetail.length) {
    return (
      <div>
        <Link to="/">
          <Button type="primary" style={{ marginBottom: "20px" }}>
            <TiArrowBack style={{ fontSize: "20px" }} />
          </Button>
        </Link>
        <Title level={3}>Detail Product Not Found</Title>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/">
          <Button type="primary" style={{ marginBottom: "20px" }}>
            <TiArrowBack style={{ fontSize: "20px" }} />
          </Button>
        </Link>
        <Title level={3}>{productDetail[0].title}</Title>
        <Space direction="vertical">
          <Text>Description: {productDetail[0].description}</Text>
          <Text>Stock: {productDetail[0].stock}</Text>
          <Text>Price: {productDetail[0].price}</Text>
          <Text>Rating: {productDetail[0].rating}</Text>
          <Text>Brand: {productDetail[0].brand}</Text>
          <Text>Category: {productDetail[0].category}</Text>
          <Divider />
          <Text>Photo Collection</Text>
          <Image.PreviewGroup>
            {productDetail[0].images.map((image) => (
              <Image
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                src={image}
                alt="Product"
              />
            ))}
          </Image.PreviewGroup>
        </Space>
      </div>
    );
  }
}
