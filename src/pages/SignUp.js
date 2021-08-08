import React, { useState, useEffect } from "react";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import Controls from "../components/controls/Controls";
import { useForm, Form } from "../components/useForm";
import { Grid, Paper, Avatar, Typography } from "@material-ui/core";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

export const initialFValues = {
  fullName: "",
  email: "",
  mobile: "",
  gender: "male",
  who: "",
  // dob: new Date(),
  terms: false,
  password: "",
  confPass: "",
};

function SignUpForm({ setUser }) {

  const validate = (fieldValues = values) => {
    // console.log(values);
    let temp = { ...errors };

    if ("fullName" in fieldValues)
      temp.fullName = fieldValues.fullName ? "" : "This field is required.";
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required.";
    if ("who" in fieldValues)
      temp.who = fieldValues.who.length !== 0 ? "" : "This field is required.";
    if ("password" in fieldValues)
      temp.password = fieldValues.password ? "" : "This field is required.";
    if ("confPass" in fieldValues)
      temp.confPass =
        values.password === fieldValues.confPass
          ? ""
          : "Passwords do not match.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((message) => message === "");
  };

  const { 
    values, 
    setValues,
    errors, 
    setErrors, 
    handleInputChange, 
    resetForm } = useForm(initialFValues, true, validate);

  // const { write } = Userdata(initialFValues);

  // useEffect(() => {
  //   setUsers([...users, user]);
  // },[user]);

  // useEffect(() => {
  //   sender();
  //   // console.log(users);
  // },[users]);

  // const sender = () => {
  //   sendData(users);
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // console.log(values);
      // write(values);
      setUser({ email: values.email, password: values.password });
      resetForm();
    }
  };

  const paperStyle = {
    padding: "30px 10px",
    width: "400px",
    margin: "0 auto",
  };

  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };

  const headerStyle = {
    margin: "0",
  };

  const profession = () => [
    { id: "1", title: "Student" },
    { id: "2", title: "Teacher" },
    { id: "3", title: "Professional" },
  ];

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Grid>
          <Paper style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <AddCircleOutlineOutlinedIcon />
              </Avatar>
              <h2 style={headerStyle}>Sign Up</h2>
              <Typography variant="caption">
                Please fill the form to sign up
              </Typography>
            </Grid>
            <Grid align="center">
              <Controls.Input
                name="fullName"
                label="Full Name"
                value={values.fullName}
                onChange={handleInputChange}
                error={errors.fullName}
              />
              <Controls.Input
                label="Email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
              />
              <Controls.Input
                label="Mobile"
                name="mobile"
                value={values.mobile}
                onChange={handleInputChange}
                error={errors.mobile}
              />
              <Controls.RadioGroup
                name="gender"
                label="Gender"
                value={values.gender}
                onChange={handleInputChange}
                items={genderItems}
              />
              <Controls.Select
                name="who"
                label="Are you a"
                value={values.who}
                onChange={handleInputChange}
                options={profession()}
                error={errors.who}
              />
              {/* <Controls.DatePicker
              name="dob"
              label="Date of Birth"
              value={values.dob}
              onChange={handleInputChange}
            /> */}
              <Controls.Input
                name="password"
                type="password"
                label="Password"
                value={values.password}
                onChange={handleInputChange}
                error={errors.password}
              />
              {/* {values.password} */}
              <Controls.Input
                name="confPass"
                type="password"
                label="Confirm Password"
                value={values.confPass}
                onChange={handleInputChange}
                error={errors.confPass}
              />
              {/* {values.confPass} */}

              <Controls.Checkbox
                name="terms"
                label="I have read Terms and conditions"
                value={values.terms}
                onChange={handleInputChange}
              />
              <Controls.Button type="submit" text="Submit" />
            </Grid>
          </Paper>
        </Grid>
      </Form>
    </div>
  );
}

export default SignUpForm;
