import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 90%;
  padding: 30px 20px;
  background-color: white;
  box-shadow: 0 0 1.5rem rgba(105, 105, 105, 0.5);
  border-radius: 4px;
  margin: 0 auto;
  margin-top: 30px;
  .regSubmit {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const FormRow = styled.div`
  @media only screen and (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const BaseFormHeader = styled.header`
  text-align: center;
`;

export const BaseFormHeading = styled.h1`
  text-transform: capitalize;
`;

export const BaseForm = styled.form`
  display: grid;
`;

export const FormFieldWrap = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 20px;
  width: 100%;
  @media only screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const FormLabel = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormFieldLabel = styled.label`
  font-weight: 500;
  margin-bottom: 5px;
  ::first-letter {
    text-transform: uppercase;
  }
`;

export const FormFieldWrapInner = styled.div`
  grid-column: 1/-1;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(60, 66, 87, 0.16) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  background-color: white;
  margin: 10px 0 5px;
  margin-top: 10px;
  border-radius: 4px;
  font-size: 14px;
  height: 31px;
  display: flex;

  transition: background-color 240ms, box-shadow 240ms;
  .active {
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0.34) 0px 0px 0px 4px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(60, 66, 87, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px;
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  line-height: 20px;
  color: tomato;
  display: flex;
  justify-content: flex-end;
  .floatRight {
    float: right;
  }
`;

export const FormField = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  padding: 5px 10px;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  border-radius: inherit;
`;

export const SubmitButton = styled.button`
  background-color: #1aaa55;
  color: white;
  cursor: pointer;
  padding: 10px 8px;
  border-radius: 4px;
  border: 1px solid #1aaa55;
  font-size: 16px;
  text-transform: capitalize;
  grid-column: 1/-1;
  margin-top: 12px;
`;

export const SignUpButton = styled(Link)`
  background-color: #0000ff;
  color: white;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #00008b;
  font-size: 16px;
  text-transform: capitalize;
  grid-column: 1/-1;
  margin-top: 12px;
  text-decoration: none;
  margin-left: 12px;
`;

export const SuccessMsg = styled.h2`
  color: #1aaa55;
  margin-top: 12px;
`;
