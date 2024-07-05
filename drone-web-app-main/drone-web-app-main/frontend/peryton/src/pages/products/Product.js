import React, { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import useBreadCrumbs from "use-react-router-breadcrumbs";
import { products } from "../../constants/data";
import StyledHeading from "../../components/styledHeading";
import BreadCrumbBar from "../../components/breadCrumbBar";

const Product = () => {
  const { id } = useParams();

  const [open, setOpen] = React.useState(false);
  const [productData, setProductData] = React.useState();
  const [productNameById, setProductNameById] = React.useState();

  const [inquiry, setInquiry] = React.useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const DynamicProductBreadCrumb = ({ match }) => {
    return <span>{productNameById[match.params.id]}</span>;
  };

  const routes = [
    { path: "/products/:id", breadcrumb: DynamicProductBreadCrumb },
  ];

  useEffect(() => {
    const m = products.map((product) => {
      if (product.id === Number(id)) {
        return { [product.id]: product.name };
      }
    })[Number(id) - 1];
    setProductNameById(m);

    const p = products.filter((product) => {
      //   console.log(product.id, Number(id));
      if (product.id === Number(id)) {
        // console.log(product);
        return product;
      }
    })[0];

    setProductData(p);
  }, [id]);

  const breadCrumbs = useBreadCrumbs(productNameById ? routes : []);

  const handleOpen = () => {
    console.log("open");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inquiry);  
  }

  return (
    <div className="bg-gray-950 w-full h-full py-8 pb-32">
      <BreadCrumbBar breadCrumbs={breadCrumbs} />

      {productData ? (
        <>
          <StyledHeading
            bg_text={productData.name}
            fg_text={productData.name}
          />

          <div className="w-[80%] m-auto flex flex-col items-center justify-center">
            <div className="w-[80%] h-[500px] bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={productData.image}
                alt={productData.name}
                className="w-full h-full object-cover"
              />
            </div>
            <button
              className="bg-blue-700 text-white font-bold py-4 px-8 rounded-md my-8 hover:text-blue-700 hover:bg-gray-700"
              onClick={handleOpen}
            >
              Inquire Now
            </button>

            <div
              id="login-popup"
              tabindex="-1"
              class={
                "bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
              }
              style={{ display: open ? "flex" : "none" }}
            >
              <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                <div class="relative bg-white rounded-lg shadow">
                  <button
                    type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
                    onClick={handleClose}
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5"
                      fill="#c6c7c7"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        cliprule="evenodd"
                      ></path>
                    </svg>
                    <span class="sr-only">Close popup</span>
                  </button>

                  <div class="p-5">
                    <h3 class="text-2xl mb-0.5 font-medium"></h3>
                    <p class="mb-4 text-sm font-normal text-gray-800"></p>

                    <div class="text-center">
                      <p class="text-2xl font-semibold leading-5 text-slate-900">
                        Inquiry
                      </p>
                      <p class="text-sm leading-4 text-slate-600">
                        Fields marked with * are required
                      </p>
                    </div>

                    <form class="w-full" onSubmit={handleSubmit}>
                      <label for="name" class="sr-only">
                        Name *
                      </label>
                      <input
                        name="name"
                        type="name"
                        required
                        class="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Name*"
                        value={inquiry.name}
                        onChange={(e) => {
                          setInquiry({
                            ...inquiry,
                            name: e.target.value,
                          });
                        }}
                      />
                      <label for="email" class="sr-only">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        autocomplete="email"
                        required=""
                        class="mt-3 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Email*"
                        value={inquiry.email}
                        onChange={(e) => {
                          setInquiry({
                            ...inquiry,
                            email: e.target.value,
                          });
                        }}
                      />
                      <label for="phone" class="sr-only">
                        Phone *
                      </label>
                      <input
                        name="phone"
                        type="phone"
                        required
                        class="mt-3 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Phone Number*"
                        value={inquiry.phone}
                        onChange={(e) => {
                          setInquiry({
                            ...inquiry,
                            phone: e.target.value,
                          });
                        }}
                      />
                      <label for="phone" class="sr-only">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        type="text"
                        rows="4"
                        required
                        class="mt-3 mb-3 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                        placeholder="Message*"
                        value={inquiry.message}
                        onChange={(e) => {
                          setInquiry({
                            ...inquiry,
                            message: e.target.value,
                          });
                        }}
                      ></textarea>
                      <p class="mb-3 mt-2 text-sm text-gray-500">
                        <a
                          href="/forgot-password"
                          class="text-blue-800 hover:text-blue-600"
                        >
                          Reset your password?
                        </a>
                      </p>
                      <button
                        onClick={handleSubmit}
                        type="submit"
                        class="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-3/4 text-white text-2xl font-bold ">
              Description
            </div>
            <div className="w-3/4 text-white text-justify py-8">
              {productData.description}
            </div>
          </div>
        </>
      ) : (
        <div className="text-white text-2xl font-bold">Product not found</div>
      )}
    </div>
  );
};

export default Product;
