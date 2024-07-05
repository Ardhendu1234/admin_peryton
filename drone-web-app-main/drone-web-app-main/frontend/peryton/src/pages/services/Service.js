import React, { useEffect } from "react";
import { services } from "../../constants/data";
import { Link, useNavigate, useParams } from "react-router-dom";
import useBreadCrumbs from "use-react-router-breadcrumbs";
import StyledHeading from "../../components/styledHeading";
import BreadCrumbBar from "../../components/breadCrumbBar";

const Service = () => {
  const { id } = useParams();

  const [serviceData, setServiceData] = React.useState();
  const [serviceNameById, setServiceNameById] = React.useState();

  const DynamicServicesBreadCrumb = ({ match }) => {
    console.log(serviceNameById);
    return <span>{serviceNameById[match.params.id]}</span>;
  };

  const routes = [
    { path: "/services/:id", breadcrumb: DynamicServicesBreadCrumb },
  ];

  useEffect(() => {
    const m = services.map((service) => {
      if (service.id === Number(id)) {
        console.log(service);
        return { [service.id]: service.title };
      }
    })[Number(id) - 1];
    console.log(m);
    setServiceNameById(m);

    const p = services.filter((service) => {
        console.log(service.id, Number(id));
      if (service.id === Number(id)) {
        // console.log(product);
        return service;
      }
    })[0];

    setServiceData(p);
  }, [id]);

  const breadCrumbs = useBreadCrumbs(serviceNameById? routes : []);

  return (
    <div className="bg-gray-950 w-full h-full py-8 pb-32">
      <BreadCrumbBar breadCrumbs={breadCrumbs} />

      {serviceData ? (
        <StyledHeading
          bg_text={serviceData.title}
          fg_text={serviceData.title}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Service;
