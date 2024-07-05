import React from "react";
import { services } from "../../constants/data";
import { Link, useNavigate } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import StyledHeading from "../../components/styledHeading";
import BreadCrumbBar from "../../components/breadCrumbBar";

const Services = () => {
  const navigate = useNavigate();
  const breadCrumbs = useBreadcrumbs();

  return (
    <div className="bg-gray-950 w-full h-full py-8 pb-32">
      <BreadCrumbBar breadCrumbs={breadCrumbs} />

      <StyledHeading bg_text="Services" fg_text="Services" />

      <div className="flex md:flex-row flex-col gap-6 justify-between w-[80%] h-auto min-w-[300px] mx-auto overflow-hidden shrink-0 rounded-md shadow-md">
        {services.map((item) => {
          return (
            <div className="flex flex-col items-center justify-center align-middle w-[380px] h-[380px] bg-gray-800 rounded-lg hover:bg-blue-700 p-12" onClick={() => {navigate("/services/" + item.id);}}>
              <div className="text-white text-5xl mb-12">{item.icon}</div>
              <div className="text-white text-3xl font-bold mb-8 text-center">
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
