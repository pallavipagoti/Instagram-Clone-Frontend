import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { signupAction, spinAction } from "../../Redux/Auth/Action";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Email required"),
  password: Yup.string()
    .min(8, "Password must have at least 8 characters")
    .required("password required"),
  username: Yup.string().required("username required"),
  name: Yup.string().required("name required"),
});

const Signup = () => {
  const initialValues = { email: "", username: "", name: "", password: "" };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const toast = useToast();

  const handleSubmit = (values, action) => {
    dispatch(signupAction(values));
    action.setSubmitting(false);
  };
  useEffect(() => {
    dispatch(spinAction);
  }, []);

  useEffect(() => {
    if (auth.signup?.username) {
      navigate("/login");
      toast({
        title: `Account created for ${auth.signup?.username}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [auth.signup]);

  const handleNavigate = () => navigate("/login");
  return (
    <div>
      <div className="border">
        <Box
          p={8}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <img className="mb-4" src="https://i.imgur.com/zqpwkLQ.png" alt="" />
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

                <Field name="username">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.username && form.touched.username}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="username"
                        placeholder="Username"
                      ></Input>
                      <FormErrorMessage>
                        {form.errors.username}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="name">
                  {({ field, form }) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input
                        className="w-full"
                        {...field}
                        id="name"
                        placeholder="Name"
                      ></Input>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </div>
      <div className="border w-full border-slate-300 mt-4">
        <p className="text-center py-2 text-sm">
          If You Already Have Account
          <span
            className="ml-2 text-blue-700 cursor-pointer"
            onClick={handleNavigate}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
