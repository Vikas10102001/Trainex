import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

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

function ClientForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      DOB: "",
      gender: "",
      address: "",
      contact: "",
      goaltype: "",
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
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

      <div>
        <label htmlFor="lastName">Last Name:</label>
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

      <div>
        <label htmlFor="DOB">Date of Birth:</label>
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

      <div>
        <label htmlFor="gender">Gender:</label>
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

      <div>
        <label htmlFor="address">Address:</label>
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

      <div>
        <label htmlFor="contact">Contact Number:</label>
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

      <div>
        <label htmlFor="goaltype">Goal Type:</label>
        <input
          type="text"
          id="goaltype"
          name="goaltype"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.goaltype}
        />
        {formik.touched.goaltype && formik.errors.goaltype ? (
          <div className="error">{formik.errors.goaltype}</div>
        ) : null}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default ClientForm;
