import React from "react";
import Client from "../../Components/ClientInfo";

export default function Clients() {
  const [clients, setClients] = React.useState([]);

  React.useEffect(() => {
    //get all clients
    const getClientsAPI = async () => {
      try {
        const url = import.meta.env.VITE_API_URL;
        const response = await fetch(url);
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.log(error);
      }
    };
    getClientsAPI();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = confirm("Are u sure delete this client?");
    if (confirmDelete) {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const response = await fetch(url, {
          method: "DELETE",
        });
        await response.json();

        const arrayClients = clients.filter((client) => client.id !== id);
        setClients(arrayClients);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Clients</h1>
      <p className="mt-3 font-bold">Manage your clients</p>

      <table className="w-full mt-5 table-auto shadow bg-white rounded-tl-3xl rounded-tr-3xl">
        <thead className="bg-blue-800 text-white">
          <tr className="p-2">
            <th className="p-2 rounded-tl-3xl">Name</th>
            <th className="p-2">Contact</th>
            <th className="p-2">Business</th>
            <th className="p-2 rounded-tr-3xl">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <Client
              key={client.id}
              client={client}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
