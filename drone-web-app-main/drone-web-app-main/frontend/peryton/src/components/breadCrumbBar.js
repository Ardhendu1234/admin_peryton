import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbBar = ({ breadCrumbs }) => {
  return (
    <div className="flex flex-row flex-wrap flex-start md:justify-center items-center text-white py-4 w-[80%] m-auto">
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
            {breadcrumb.props.children.includes("%20") ? breadcrumb.props.children.replace(/%20/g, " ") : breadcrumb.props.children}
          </Link>
        );
      })}
    </div>
  );
};

export default BreadCrumbBar;
