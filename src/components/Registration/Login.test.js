import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

describe("Registration Form tests", () => {
  test("Success test", async () => {
    const registerForm = render(<RegisterForm />);

    const firstName = registerForm.getByTestId("formFirstName");
    const lastName = registerForm.getByTestId("formLastName");
    const email = registerForm.getByTestId("formEmail");
    const password = registerForm.getByTestId("formPassword");
    const submitButton = registerForm.getByTestId("formSubmitButton");

    userEvent.type(firstName, "krishnakanth");
    userEvent.type(lastName, "M");
    userEvent.type(email, "krishna@g.com");
    userEvent.type(password, "password@123");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(
        within(registerForm.getByTestId("successMessage")).getByText(
          "Registration Successful."
        ).innerHTML
      ).toBe("Registration Successful.");
    });
  });
  test("Failure test", async () => {
    const registerForm = render(<RegisterForm />);

    const firstName = registerForm.getByTestId("formFirstName");
    const lastName = registerForm.getByTestId("formLastName");
    const email = registerForm.getByTestId("formEmail");
    const password = registerForm.getByTestId("formPassword");
    const submitButton = registerForm.getByTestId("formSubmitButton");

    userEvent.type(firstName, "krishnakanth Muthukuru");
    userEvent.type(lastName, "krishnakanth Muthukuru");
    userEvent.type(email, "krishna@.com");
    userEvent.type(password, "pass");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(
        within(registerForm.getByTestId("formValidate")).getByTestId(
          "errorFirstName"
        ).innerHTML
      ).toBe("Must be less than 15 characters");
      expect(
        within(registerForm.getByTestId("formValidate")).getByTestId(
          "errorLastName"
        ).innerHTML
      ).toBe("Must be less than 15 characters");
      expect(
        within(registerForm.getByTestId("formValidate")).getByTestId(
          "errorEmail"
        ).innerHTML
      ).toBe("Invalid email address");
      expect(
        within(registerForm.getByTestId("formValidate")).getByTestId(
          "errorPassword"
        ).innerHTML
      ).toBe("Must be more than 8 characters");
    });
  });
  test("check for required error", async () => {
    const registerForm = render(<RegisterForm />);

    const firstName = registerForm.getByTestId("formFirstName");
    const lastName = registerForm.getByTestId("formLastName");
    const email = registerForm.getByTestId("formEmail");
    const password = registerForm.getByTestId("formPassword");
    const submitButton = registerForm.getByTestId("formSubmitButton");

    userEvent.type(firstName, "");
    userEvent.type(lastName, "");
    userEvent.type(email, "");
    userEvent.type(password, "");
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(
        within(registerForm.getByTestId("formValidate")).getByTestId(
          "errorFirstName"
        ).innerHTML
      ).toBe("Required");
      expect(
        within(registerForm.getByTestId("formValidate")).getByTestId(
          "errorLastName"
        ).innerHTML
      ).toBe("Required");
      expect(
        within(registerForm.getByTestId("formValidate")).getByTestId(
          "errorEmail"
        ).innerHTML
      ).toBe("Required");
      expect(
        within(registerForm.getByTestId("formValidate")).getByTestId(
          "errorPassword"
        ).innerHTML
      ).toBe("");
    });
  });
});
