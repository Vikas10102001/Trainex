import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setAlert } from "../../store/store";

const validationSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First Name must be at least 2 characters")
    .max(15, "First Name must be at most 15 characters")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Last Name must be at least 2 characters")
    .max(15, "Last Name must be at most 15 characters")
    .required("Last Name is required"),
  DOB: Yup.string().required("Date of Birth is required"),
  gender: Yup.string().required("Gender is required"),
  address: Yup.string()
    .min(5, "Address must be at least 5 characters")
    .max(50, "Address must be at most 50 characters")
    .required("Address is required"),
  contact: Yup.string()
    .matches(
      /^\d{10}$/,
      "Contact Number must be a 10-digit number without spaces or special characters"
    )
    .required("Contact Number is required"),
  goaltype: Yup.string(),
});

function ClientForm() {
  const dispatch = useDispatch();
  const onFormSubmit = (values) => {
    console.log(values);
    dispatch(setAlert({ type: "info", message: "Not implemented yet" }));
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      DOB: "",
      gender: "",
      address: "",
      contact: "",
    },
    validationSchema,
    onSubmit: (values) => {
      onFormSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="client-form">
      <div>
        <label htmlFor="firstName">First Name:</label>
        <div className="input-error">
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="error">{formik.errors.firstName}</div>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <div className="input-error">
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="error">{formik.errors.lastName}</div>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="DOB">Date of Birth:</label>
        <div className="input-error">
          <input
            type="text"
            id="DOB"
            name="DOB"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.DOB}
          />
          {formik.touched.DOB && formik.errors.DOB ? (
            <div className="error">{formik.errors.DOB}</div>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="gender">Gender:</label>
        <div className="input-error">
          <input
            type="text"
            id="gender"
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
          />
          {formik.touched.gender && formik.errors.gender ? (
            <div className="error">{formik.errors.gender}</div>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="address">Address:</label>
        <div className="input-error">
          <input
            type="text"
            id="address"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="error">{formik.errors.address}</div>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="contact">Contact Number:</label>
        <div className="input-error">
          <input
            type="text"
            id="contact"
            name="contact"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contact}
          />
          {formik.touched.contact && formik.errors.contact ? (
            <div className="error">{formik.errors.contact}</div>
          ) : null}
        </div>
      </div>
      <button
        type="submit"
        className="primary"
        disabled={formik.errors && formik.touched}
      >
        Add client
      </button>
    </form>
  );
}

export default ClientForm;
