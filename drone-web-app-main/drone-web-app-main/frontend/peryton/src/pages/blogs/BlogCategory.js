import React from "react";
import { useParams } from "react-router-dom";

const BlogCategory = () => {
  const { category } = useParams();
  return <div>{category}</div>;
};

export default BlogCategory;
