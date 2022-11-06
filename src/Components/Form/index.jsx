import React from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import MessageError from "../MessageError";
import Spinner from "../Spinner";

export default function FormClient({ client }) {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      let response;
      let data;
      if (client.id) {
        //put clients
        const url = `${import.meta.env.VITE_API_URL}/${client.id}`;
        response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        //post clients
        const url = import.meta.env.VITE_API_URL;
        response = await fetch(url, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      await response.json();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const schema = Yup.object().shape({
    name: Yup.string()
      .min(4, "Minimum 4 characteres")
      .max(15, "Max 15 characteres")
      .required("The Name is required"),
    business: Yup.string().required("The Name Business is required"),
    email: Yup.string()
      .email("Invalid E-mail")
      .required("The E-mail is required"),
    phone: Yup.number()
      .integer("Invalid Number")
      .positive("Invalid Number")
      .typeError("Invalid Number"),

    notes: "",
  });

  return (
    <>
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
        <h1 className="font-bold text-gray-600 text-xl uppercase text-center">
          {!client.name ? " Add New Client" : "Edit Client"}
        </h1>
        <Formik
          initialValues={{
            name: client?.name ?? "",
            business: client?.business ?? "",
            email: client?.email ?? "",
            phone: client?.phone ?? "",
            notes: client?.notes ?? "",
          }}
          enableReinitialize={true}
          validationSchema={schema}
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values);
            resetForm();
            navigate("/");
          }}
        >
          {/* Touched es para cuando el usuario selecciona un input y luego lo desselecciona */}
          {({ values, handleSubmit, errors, touched }) => (
            <Form className="mt-10" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="text-gray-800">
                  Name:
                </label>
                <Field
                  id="name"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Name Client"
                  name="name"
                  autoComplete="off"
                />
                {errors.name && touched.name ? (
                  <MessageError>*{errors.name}</MessageError>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="business" className="text-gray-800">
                  Business:
                </label>
                <Field
                  id="business"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Name Business"
                  name="business"
                  autoComplete="off"
                />
                {errors.business && touched.business ? (
                  <MessageError>*{errors.business}</MessageError>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-gray-800">
                  E-mail:
                </label>
                <Field
                  id="email"
                  type="email"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="E-mail Client"
                  name="email"
                  autoComplete="off"
                />
                {errors.email && touched.email ? (
                  <MessageError>*{errors.email}</MessageError>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="text-gray-800">
                  Phone:
                </label>
                <Field
                  id="phone"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-50"
                  placeholder="Phone Client"
                  name="phone"
                  autoComplete="off"
                />
                {errors.phone && touched.phone ? (
                  <MessageError>*{errors.phone}</MessageError>
                ) : null}
              </div>
              <div className="mb-4">
                <label htmlFor="notes" className="text-gray-800">
                  Notes :
                </label>
                <Field
                  as="textarea"
                  id="notes"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-50 h-30"
                  placeholder="Notes Client"
                  name="notes"
                  autoComplete="off"
                />
              </div>
              <button
                type="submit"
                className="mt-5 bg-blue-800 w-full p-3 text-white rounded-md uppercase font-bold text-lg cursor-pointer"
              >
                {!client.name ? "Add Client" : "Edit Client"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

FormClient.defaultProps = {
  client: {},
};
