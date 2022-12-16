import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField, Typography } from "@mui/material";
const initialValues = {
  name: "",
  contact: "",
  email: "",
  password: "",
};
const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const userSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("email is required"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),

  name: yup.string().required("name is required"),

  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("number is required"),
});

const Registration = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (values) => {
    localStorage.setItem("email", JSON.stringify(values.email));
    localStorage.setItem("password", JSON.stringify(values.password));
    //localStorage.setItem("login", JSON.stringify(values));

    navigate("/login");
    console.log(values);
  };
  //   useEffect(() => {
  //     let login = localStorage.getItem("login");
  //     if (login) {
  //       navigate("/login");
  //     }
  //   });
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Box
      sx={{
        width: 600,
        height: 600,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(240, 240, 240)",

        borderRadius: 2,
        margin: "5% auto",
        opacity: 0.9,
        boxShadow:
          "rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0",
      }}
    >
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box display="flex" width="500px" gap="20px" flexDirection="column">
              <Typography variant="h4" sx={{ text: "bold" }}>
                Registration
              </Typography>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />{" "}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 2" }}
              />{" "}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" }}
              />{" "}
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 2" }}
              />{" "}
            </Box>
            <Box display="flex" justifyContent="spaceBetween" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Submit
              </Button>
              <Typography onClick={handleClick} sx={{ margin: "6px" }}>
                Already registered
                <span style={{ color: "blue", cursor: " pointer" }}>
                  {" "}
                  Login ?
                </span>
              </Typography>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Registration;
