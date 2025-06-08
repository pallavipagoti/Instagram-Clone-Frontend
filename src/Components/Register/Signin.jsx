import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signinAction, spinAction } from "../../Redux/Auth/Action";
import { getUserProfileAction } from "../../Redux/User/Action";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email required"),
  password: Yup.string()
    .min(8, "Password must have at least 8 characters")
    .required("password required"),
});

const Signin = () => {
  const initialValues = { email: "", password: "" };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { signin } = useSelector((store) => store.auth);
  // const jwt = localStorage.getItem("token");
  const jwt = signin;

  const { user } = useSelector((store) => store);

  const handleSubmit = (values, action) => {
    dispatch(signinAction(values));
  };

  useEffect(() => {
    dispatch(spinAction());
  }, [dispatch]);

  useEffect(() => {
    if (jwt) dispatch(getUserProfileAction(jwt));
  }, [jwt, dispatch]);

  useEffect(() => {
    // console.log(jwt);

    if (user.regUser?.username && jwt) {
      // navigate("/");
      navigate(`/${user.regUser.username}`);
    }
  }, [user.regUser, jwt]);
  const handleNavigate = () => {
    navigate("/Signup");
  };
  return (
    <div>
      <div className="border">
        <Box
          p={8}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <img className="mb-5" src="https://i.imgur.com/zqpwkLQ.png" alt="" />
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {(formikProps) => (
              <Form className="space-y-3">
                <Field name="email">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.email && form.touched.email}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="email"
                        placeholder="Mobile Number or Email"
                      ></Input>
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="password"
                        placeholder="Password"
                      ></Input>
                      <FormErrorMessage>
                        {form.errors.password}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <p className="text-center text-sm">
                  People who use our service may have uploaded your contact
                  information to Instagram. Learn More
                </p>
                <p className="text-center text-sm">
                  By signing up you agree to our Terms, Privacy Policy and
                  Cookies Policy
                </p>
                <Button
                  className="w-full"
                  mt={4}
                  colorScheme="blue"
                  type="submit"
                  isLoading={formikProps.isSubmitting}
                >
                  Sign In
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
      <div className="border w-full border-slate-300 mt-5">
        <p className="text-center py-2 text-sm">
          If You Don't Have Account
          <span
            className="ml-2 text-blue-700 cursor-pointer"
            onClick={handleNavigate}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
