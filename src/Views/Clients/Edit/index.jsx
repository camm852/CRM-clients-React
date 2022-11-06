import React from "react";
import FormClient from "../../../Components/Form";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from "../../../Components/Spinner";

export default function EditClient() {
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
      <h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
      <p className="mt-3 font-bold">Fill in all the fields of the form</p>
      {client?.name ? (
        <FormClient client={client} />
      ) : (
        <p className="mt-10 font-bold">Client ID invalid</p>
      )}
      <button
        className="bg-blue-900 p-3 mt-10 text-white rounded-md font-bold"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </button>
    </>
  );
}
