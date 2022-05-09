import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Form.styles.js";
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
  SubmitButton,
  SuccessMsg,
} from "./Form.styles.js";

const RegisterForm = () => {
  const [successMsg, setSuccessMsg] = useState(false);
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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .required("Required")
        .max(15, "Must be less than 15 characters"),
      lastName: Yup.string()
        .required("Required")
        .max(15, "Must be less than 15 characters"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be more than 8 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      window.localStorage.setItem(values.email, JSON.stringify(values));
      setSuccessMsg(true);
      setTimeout(() => {
        setSubmitting(false);
        resetForm();
        setSuccessMsg(false);
      }, 1000);
    },
  });

  return (
    <>
      <FormWrapper>
        <BaseForm data-testid="formValidate" noValidate onSubmit={handleSubmit}>
          <BaseFormHeader>
            <BaseFormHeading>register</BaseFormHeading>
          </BaseFormHeader>
          <FormRow>
            <FormFieldWrap>
              <FormLabel>
                <FormFieldLabel htmlFor="firstName">First Name</FormFieldLabel>
                <ErrorMessage data-testid='errorFirstName'>
                  {touched["firstName"] && errors["firstName"]}
                </ErrorMessage>
              </FormLabel>
              <FormFieldWrapInner>
                <FormField
                  type="text"
                  id="firstName"
                  className="firstName"
                  data-testid="formFirstName"
                  {...getFieldProps("firstName")}
                />
              </FormFieldWrapInner>
            </FormFieldWrap>
            <FormFieldWrap>
              <FormLabel>
                <FormFieldLabel htmlFor="lastName">Last Name</FormFieldLabel>
                <ErrorMessage data-testid='errorLastName'>
                  {touched["lastName"] && errors["lastName"]}
                </ErrorMessage>
              </FormLabel>
              <FormFieldWrapInner>
                <FormField
                  type="text"
                  id="lastName"
                  className="lastName"
                  data-testid="formLastName"
                  {...getFieldProps("lastName")}
                />
              </FormFieldWrapInner>
            </FormFieldWrap>
          </FormRow>
          <FormRow>
            <FormFieldWrap>
              <FormLabel>
                <FormFieldLabel htmlFor="email">Email Address</FormFieldLabel>
                <ErrorMessage className="floatRight" data-testid='errorEmail'>
                  {touched["email"] && errors["email"]}
                </ErrorMessage>
              </FormLabel>
              <FormFieldWrapInner>
                <FormField
                  type="email"
                  id="email"
                  className="email"
                  data-testid="formEmail"
                  {...getFieldProps("email")}
                />
              </FormFieldWrapInner>
            </FormFieldWrap>
          </FormRow>
          <FormRow>
            <FormFieldWrap>
              <FormLabel>
                <FormFieldLabel htmlFor="password">Password</FormFieldLabel>
                <ErrorMessage className="floatRight" data-testid='errorPassword'>
                  {touched["password"] && errors["password"]}
                </ErrorMessage>
              </FormLabel>
              <FormFieldWrapInner>
                <FormField
                  type="password"
                  id="password"
                  className="password"
                  data-testid="formPassword"
                  {...getFieldProps("password")}
                />
              </FormFieldWrapInner>
            </FormFieldWrap>
          </FormRow>
          <FormRow className="regSubmit">
            <SubmitButton
              type="submit"
              data-testid="formSubmitButton"
              disabled={!(isValid && dirty) || isSubmitting}
            >
              {(isSubmitting && "Working on it...") || "Submit"}
            </SubmitButton>
            {successMsg && (
              <SuccessMsg data-testid="successMessage">
                Registration Successful.
              </SuccessMsg>
            )}
          </FormRow>
        </BaseForm>
      </FormWrapper>
    </>
  );
};

export default RegisterForm;
