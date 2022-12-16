import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { Box, Button, TextField, Typography } from "@mui/material";
const initialValues = {
  email: "",
  password: "",
};
const userSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const Login = () => {
  const navigate = useNavigate();
  const handleFormSubmit = (values) => {
    let emailLog = JSON.parse(localStorage.getItem("email"));
    let passLog = JSON.parse(localStorage.getItem("password"));

    if (emailLog === values.email && passLog === values.password) {
      navigate("/");
      localStorage.setItem("login", true);
    } else {
      console.log("error");
    }
  };
  const handleClick = () => {
    navigate("/registration");
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
                Login
              </Typography>

              
              <TextField
                fullWidth
                autoComplete="true"
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 2" ,fontSize:'20px'}}
              />{" "}
              <TextField
                fullWidth
                autoComplete="current-password"
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
                Login
              </Button>

              <Typography onClick={handleClick} sx={{ margin: "6px" }}>
                Create Account
                <span
                  style={{ color: "blue", cursor: " pointer" }}
                  onClick={handleClick}
                >
                  {" "}
                  SingUp ?
                </span>
              </Typography>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Login;
