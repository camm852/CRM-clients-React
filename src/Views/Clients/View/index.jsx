import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import businessPerson from "../../../assets/images/empresario.png";
import Spinner from "../../../Components/Spinner";

export default function ViewClient() {
  const [client, setClient] = React.useState({});
  const [charge, setCharge] = React.useState(true);
  const params = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    const getClient = async () => {
      const { id } = params;
      try {
        setTimeout(async () => {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
          if (response.status !== 200) {
            setCharge(false);
            return;
          }
          const data = await response.json();
          setClient(data);
          setCharge(false);
        }, [800]);
      } catch (error) {
        console.log(error);
      }
    };
    getClient();
  }, [params]);

  return charge ? (
    <Spinner />
  ) : (
    <>
      <h1 className="font-black text-4xl text-blue-900">View Client</h1>
      <p className="mt-3 font-bold">Client Information</p>
      {Object.keys(client).length !== 0 ? (
        <div className="mt-10">
          <div>
            {client.name && (
              <p className="text-gray-600 mt-4 text-2xl">
                <span className="text-2xl text-gray-800 font-bold uppercase">
                  Name:{" "}
                </span>
                {client.name}
              </p>
            )}
            {client.business && (
              <p className="text-gray-600 mt-4 text-2xl">
                <span className="text-2xl text-gray-800 font-bold uppercase">
                  Business:{" "}
                </span>
                {client.business}
              </p>
            )}
            {client.email && (
              <p className="text-gray-600 mt-4 text-2xl">
                <span className="text-2xl text-gray-800 font-bold uppercase">
                  E-mail:{" "}
                </span>
                {client.email}
              </p>
            )}
            {client.phone && (
              <p className="text-gray-600 mt-4 text-2xl">
                <span className="text-2xl text-gray-800 font-bold uppercase">
                  Tel:{" "}
                </span>
                {client.phone}
              </p>
            )}
            {client.notes && (
              <p className="text-gray-600 mt-4 text-2xl">
                <span className="text-2xl text-gray-800 font-bold uppercase">
                  Notes:{" "}
                </span>
                {client.notes}
              </p>
            )}
          </div>
          <button
            className="bg-blue-900 p-3 mt-10 text-white rounded-md font-bold"
            onClick={() => {
              navigate("/clients");
            }}
          >
            Go Back
          </button>
        </div>
      ) : (
        <>
          <p className="font-bold text-3xl mt-10">Client ID invalid</p>
          <button
            className="bg-blue-900 p-3 mt-10 text-white rounded-md font-bold"
            onClick={() => {
              navigate("/clients");
            }}
          >
            Go Back
          </button>
        </>
      )}
    </>
  );
}
