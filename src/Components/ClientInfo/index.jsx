import React from "react";
import { useNavigate } from "react-router-dom";
export default function Client({ client, handleDelete }) {
  const { name, business, email, notes, id, phone } = client;

  const navigate = useNavigate();

  return (
    <tr className="border-b-2 hover:bg-gray-50">
      <td className="p-3">{name}</td>
      <td className="p-3">
        <p>
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p>
          <span className="text-gray-800 uppercase font-bold">Tel: </span>
          {phone}
        </p>
      </td>
      <td className="p-3">{business}</td>
      <td className="p-3">
        <button
          type="button"
          className="mt-3 bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs rounded-md"
          onClick={() => {
            navigate(`/${id}`);
          }}
        >
          View
        </button>
        <button
          type="button"
          className="mt-3 bg-green-600 hover:bg-green-700 block w-full text-white p-2 uppercase font-bold text-xs rounded-md"
          onClick={() => {
            navigate(`/edit/${id}`);
          }}
        >
          Edit
        </button>
        <button
          type="button"
          className="mt-3 bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs rounded-md"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
