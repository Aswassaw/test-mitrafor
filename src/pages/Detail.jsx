import React from "react";
import { Link, useParams } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import { Space, Typography, Image, Divider, Button } from "antd";
import data from "../data/product.json";

const { Title, Text } = Typography;

export default function Detail() {
  const urlParams = useParams();

  const productDetail = data.filter((product) => {
    return parseInt(product.id) === parseInt(urlParams.id);
  })[0];

  if (!productDetail) {
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
        <Title level={3}>{productDetail.title}</Title>
        <Space direction="vertical">
          <Text>Description: {productDetail.description}</Text>
          <Text>Stock: {productDetail.stock}</Text>
          <Text>Price: {productDetail.price}</Text>
          <Text>Rating: {productDetail.rating}</Text>
          <Text>Brand: {productDetail.brand}</Text>
          <Text>Category: {productDetail.category}</Text>
          <Divider />
          <Text>Photo Collection</Text>
          <Image.PreviewGroup>
            {productDetail.images.map((image, index) => (
              <Image
                key={index}
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
