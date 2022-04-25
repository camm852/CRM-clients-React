import React from "react";
import FormClient from "../../../Components/Form";

export default function NewClient() {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3 font-bold">Fill in all the fields of the form</p>
      <FormClient />
    </>
  );
}
