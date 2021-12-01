import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./signup.css";

function Signup() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(10, "Must provide 10 characters")
        .required("First Name Required"),
      lastName: Yup.string()
        .max(10, "Must provide 10 characters")
        .required("Last Name Required"),
      email: Yup.string().email("Email Required ").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // console.log(formik.values);
  // console.log(formik.errors);
  // console.log(formik.touched);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          value={formik.values.firstName}
          // To Prevent Touchable Errors
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p>{formik.errors.firstName}</p>
        ) : null}
      </div>
      <div className="input-container">
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          value={formik.values.lastName}
          // To Prevent Touchable Errors
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p>{formik.errors.lastName}</p>
        ) : null}
      </div>
      <div className="input-container">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={formik.values.email}
          // To Prevent Touchable Errors
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Signup;
