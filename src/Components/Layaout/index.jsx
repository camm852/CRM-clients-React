import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Layaout() {
  const location = useLocation();
  const currentUrl = location.pathname;

  return (
    <>
      <div className="md:flex md:min-h-screen">
        <div className="md:w-1/4 bg-blue-900 px-5 py-10">
          <h2 className="text-4xl font-black text-center text-white">
            CRM-Clients
          </h2>
          <nav className="mt-10">
            <div
              className={`${
                currentUrl !== "/clients"
                  ? "text-white hover:bg-white hover:text-blue-900"
                  : "bg-white text-blue-900"
              }  text-white w-1/2 rounded-xl p-2 mb-5 cursor-pointer`}
            >
              <Link className={`text-2xl font-bold block`} to="/clients">
                Clients
              </Link>
            </div>
            <div
              className={`${
                currentUrl !== "/clients/new"
                  ? "text-white hover:bg-white hover:text-blue-900"
                  : "bg-white text-blue-900"
              }  text-white w-1/2 rounded-xl p-2 mb-5 cursor-pointer`}
            >
              <Link className={`text-2xl font-bold block`} to="/clients/new">
                New Client
              </Link>
            </div>
            {/* <Link
                className={`${
                  currentUrl !== "/clients" ? "text-white" : "text-blue-300"
                } text-2xl font-bold block mt-2 hover:text-blue-300`}
                to="/clients"
              >
                Clients
              </Link>
            <Link
              className={`${
                currentUrl !== "/clients/new" ? "text-white" : "text-blue-300"
              } text-2xl font-bold block mt-2 hover:text-blue-300`}
              to="/clients/new"
            >
              New Client
            </Link> */}
          </nav>
        </div>
        <div className="md:w-3/4 p-10 md:h-screen overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </>
  );
}
