import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Form.styles.js";
import { authContext, useAuth } from "../../hooks/useAuth";
import {
  BaseForm,
  BaseFormHeader,
  BaseFormHeading,
  ErrorMessage,
  FormField,
  FormFieldLabel,
  FormFieldWrap,
  FormFieldWrapInner,
  FormLabel,
  FormRow,
  FormWrapper,
  SignUpButton,
  SubmitButton,
  SuccessMsg,
} from "./Form.styles.js";

const Login = () => {
  const { login } = useAuth(authContext);
  const [valid, setValid] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const {
    errors,
    touched,
    getFieldProps,
    handleSubmit,
    isSubmitting,
    setSubmitting,
    resetForm,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be more than 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      login(values)
        .then(() => {
          console.log("valid credentials");
          setValid("Valid");
          navigate(state?.path || "/dashboard");
        })
        .catch(() => {
          console.log("Invalid Credentials");
          setValid("Invalid");
        });
      setTimeout(() => {
        setSubmitting(false);
        setValid("");
        resetForm();
      }, 1000);
    },
  });

  return (
    <>
      <FormWrapper>
        <BaseForm noValidate onSubmit={handleSubmit}>
          <BaseFormHeader>
            <BaseFormHeading>Login</BaseFormHeading>
          </BaseFormHeader>
          <FormRow>
            <FormFieldWrap>
              <FormLabel>
                <FormFieldLabel htmlFor="email">Email address</FormFieldLabel>
                <ErrorMessage>
                  {touched["email"] && errors["email"]}
                </ErrorMessage>
              </FormLabel>
              <FormFieldWrapInner>
                <FormField
                  type="email"
                  {...getFieldProps("email")}
                  id="email"
                  className="email"
                />
              </FormFieldWrapInner>
            </FormFieldWrap>
          </FormRow>
          <FormRow>
            <FormFieldWrap>
              <FormLabel>
                <FormFieldLabel htmlFor="password">Password</FormFieldLabel>
                <ErrorMessage>
                  {touched["password"] && errors["password"]}
                </ErrorMessage>
              </FormLabel>
              <FormFieldWrapInner>
                <FormField
                  type="password"
                  {...getFieldProps("password")}
                  id="password"
                  className="password"
                />
              </FormFieldWrapInner>
            </FormFieldWrap>
          </FormRow>
          <FormRow>
            <SubmitButton
              type="submit"
              disabled={!(isValid && dirty) || isSubmitting}
            >
              {(isSubmitting && "Working on it...") || "Submit"}
            </SubmitButton>
            <SignUpButton to="/register">Signup</SignUpButton>
            {valid && <SuccessMsg>{valid} Credentials.</SuccessMsg>}
          </FormRow>
        </BaseForm>
      </FormWrapper>
    </>
  );
};

export default Login;
