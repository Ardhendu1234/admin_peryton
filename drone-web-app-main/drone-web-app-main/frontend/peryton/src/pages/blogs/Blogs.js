import React from "react";
import { blogData, team } from "../../constants/data";
import { Link, useNavigate } from "react-router-dom";
import useBreadCrumbs from "use-react-router-breadcrumbs";
import StyledHeading from "../../components/styledHeading";
import BlogPost from "../../components/blogPost";
import BreadCrumbBar from "../../components/breadCrumbBar";

const Blogs = () => {
  const breadCrumbs = useBreadCrumbs();

  return (
    <div className="bg-gray-950 w-full h-full py-8 pb-32">
      <BreadCrumbBar breadCrumbs={breadCrumbs} />

      <StyledHeading bg_text="Blog" fg_text="Blog" />

      <div className="flex md:flex-row flex-col gap-6 w-[80%] h-auto min-w-[300px] mx-auto overflow-hidden shrink-0 rounded-md shadow-md py-4">
        {blogData.map((item) => {
          return (
            <BlogPost
              key={item.id}
              id={item.id}
              img={item.image}
              category={item.category}
              title={item.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
