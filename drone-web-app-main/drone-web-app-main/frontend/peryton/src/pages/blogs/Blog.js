import React, { useEffect } from "react";
import { blogData, services } from "../../constants/data";
import { Link, useNavigate, useParams } from "react-router-dom";
import useBreadCrumbs from "use-react-router-breadcrumbs";
import StyledHeading from "../../components/styledHeading";
import BreadCrumbBar from "../../components/breadCrumbBar";
import "./Blog.css";

const Blog = () => {
  const { id } = useParams();

  const [blog, setBlog] = React.useState();
  const [blogNameById, setBlogNameById] = React.useState();

  const DynamicBlogsBreadCrumb = ({ match }) => {
    return <span>{blogNameById[match.params.id]}</span>;
  };

  const routes = [
    { path: "/blog/:category/:id", breadcrumb: DynamicBlogsBreadCrumb },
  ];

  useEffect(() => {
    const m = blogData.map((blog) => {
      if (blog.id === Number(id)) {
        console.log({ [blog.id]: blog.title });
        return { [blog.id]: blog.title };
      }
    })[Number(id) - 1];
    console.log(m);
    setBlogNameById(m);

    const p = blogData.filter((blog) => {
      if (blog.id === Number(id)) {
        return blog;
      }
    })[0];

    setBlog(p);
  }, [id]);

  useEffect(() => {
    if (blog) {
      document.getElementById("blog-content").innerHTML = blog.content;
    }
  }, [blog]);

  const breadCrumbs = useBreadCrumbs(blogNameById ? routes : []);

  return (
    <div className="flex lg:flex-row flex-col bg-gray-950 w-full h-full py-8 pb-32">
      <div className="flex flex-col lg:w-[70%] w-full border-r border-gray-600">
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
        {console.log(blog)}
        {blog ? (
          <div className="flex flex-col md:w-[80%] w-[95%] m-auto">
            <div className="text-gray-50 text-3xl font-bold">{blog.title}</div>
            <div className="text-gray-300 text-sm my-4 flex items-center">
              <img
                src={blog.author_image}
                alt={blog.author}
                className="w-[30px] h-[30px] rounded-[50%] mr-2"
              />
              <Link to={`/blog/${blog.author}`} className="hover:text-blue-700">
                {blog.author} <span className="px-2">{"/"}</span>
              </Link>
              <Link to={`/blog/${blog.date}`} className="hover:text-blue-700">
                {blog.date} <span className="px-2">{"/"}</span>
              </Link>
              <Link
                to={`/blog/${blog.category}`}
                className="hover:text-blue-700"
              >
                {blog.category}
              </Link>
            </div>
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[500px] my-8"
            />

            <div
              id="blog-content"
              className="w-full text-gray-200 text-justify"
            ></div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col lg:w-[30%] w-full">
        <div>
          <h3 className="text-gray-50 font-bold text-2xl px-8 pb-4">
            Recent Works
          </h3>
          <div className="w-full">
            <div className="flex justify-center pb-2">
              <img
                src="https://www.peryton.in/wp-content/uploads/2021/06/blog-img-1@2x-150x150.jpg"
                alt="work_1"
                className="w-[30%] px-1"
              />
              <img
                src="https://www.peryton.in/wp-content/uploads/2021/06/blog-img-2@2x-150x150.jpg"
                alt="work_2"
                className="w-[30%] px-1"
              />
              <img
                src="https://www.peryton.in/wp-content/uploads/2021/06/blog-img-3@2x-150x150.jpg"
                alt="work_3"
                className="w-[30%] px-1"
              />
            </div>
            <div className="flex justify-center pb-8">
              <img
                src="https://www.peryton.in/wp-content/uploads/2021/06/video-7-150x150.jpg"
                alt="work_4"
                className="w-[30%] px-1"
              />
              <img
                src="https://www.peryton.in/wp-content/uploads/2021/06/video-6-150x150.jpg"
                alt="work_5"
                className="w-[30%] px-1"
              />
              <img
                src="https://www.peryton.in/wp-content/uploads/2021/06/video-5-150x150.jpg"
                alt="work_6"
                className="w-[30%] px-1"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-gray-50 font-bold text-2xl px-8 pb-4">
            Recent Posts
          </h3>
          <div className="w-full">
            {blogData.map((blog) => {
              return (
                <Link
                  to={`/blog/${blog.id}`}
                  className="flex mx-8 my-4 max-h-[120px] rounded-md overflow-hidden bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.3)]"
                >
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-[120px] h-[120px]"
                  />
                  <div>
                    <h4 className="text-md text-gray-50 font-bold pt-4 px-4 h-[80px] overflow-ellipsis">
                      {blog.title}
                    </h4>
                    <div className="text-sm text-gray-200 px-4 pt-2">{blog.date}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
