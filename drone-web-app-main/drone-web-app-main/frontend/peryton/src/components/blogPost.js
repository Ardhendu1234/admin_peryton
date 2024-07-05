import React from "react";
import { Link } from "react-router-dom";

const BlogPost = ({ id, img, category, title }) => {
  return (
    <Link
      className="p-0 m-0 flex flex-col items-center md:w-[400px] md:h-[450px] sm:w-full bg-gray-800 overflow-hidden hover:bg-gray-700 rounded-md"
      to={`/blog/${category}/${id}`}
    >
      <div className="w-full min-h-[240px] h-[240px] max-h-[240px] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover hover:w-[130%] hover:h-[120%] transition-all duration-1000 ease-in-out"
        />
      </div>
      <div className="p-4 pt-8">
        <div className="w-full px-4 pb-4 text-blue-700 text-sm">{category}</div>
        <h2 className="text-white text-2xl font-bold px-4">{title}</h2>
      </div>
    </Link>
  );
};

export default BlogPost;
