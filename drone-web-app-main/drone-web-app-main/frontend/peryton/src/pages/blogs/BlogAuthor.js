import React, { useEffect } from "react";
import { blogData, services } from "../../constants/data";
import { Link, useNavigate, useParams } from "react-router-dom";
import useBreadCrumbs from "use-react-router-breadcrumbs";
import StyledHeading from "../../components/styledHeading";
import BreadCrumbBar from "../../components/breadCrumbBar";
import BlogPost from "../../components/blogPost";

const BlogAuthor = () => {
  const { author } = useParams();

  const [blog, setBlog] = React.useState();
  const [blogNameById, setBlogNameById] = React.useState();

  const breadCrumbs = useBreadCrumbs();

  useEffect(() => {
    const b = blogData.filter((blog) => {
      if (blog.author === author) {
        return blog;
      }
    });
    setBlog(b);
  }, [author]);

  return (
    <div className="flex lg:flex-row flex-col bg-gray-950 w-full h-full py-8 pb-32">
      <div className="flex flex-row flex-wrap flex-start items-center text-white py-4 w-[80%] m-auto">
        {breadCrumbs.map(({ match, breadcrumb }, index) => {
          if (match.pathname === "/")
            return (
              <Link
                key={match.pathname}
                to={match.pathname}
                className="text-gray-50 hover:text-blue-700"
              >
                {breadcrumb}
              </Link>
            );
          if (index === breadCrumbs.length - 1)
            return (
              <Link
                key={match.pathname}
                to={match.pathname}
                className="text-blue-700"
              >
                <span className="px-4">{">"}</span>
                {breadcrumb}
              </Link>
            );
          return (
            <Link
              key={match.pathname}
              to={match.pathname}
              className="text-gray-50 hover:text-blue-700"
            >
              <span className="px-4">{">"}</span>
              {breadcrumb.props.children.includes("%20")
                ? breadcrumb.props.children.replace(/%20/g, " ")
                : breadcrumb.props.children}
            </Link>
          );
        })}
      </div>

      <StyledHeading bg_text={author} fg_text={author} />

      <div className="flex md:flex-row flex-col gap-6 w-[80%] h-auto min-w-[300px] mx-auto overflow-hidden shrink-0 rounded-md shadow-md py-4">
        {blog &&
          blog.map((item) => {
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

export default BlogAuthor;
