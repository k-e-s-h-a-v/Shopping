import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Controls from "../components/controls/Controls";
import { useForm, Form } from "../components/useForm";
import { Grid, Paper, Avatar, Typography } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
} from "react-router-dom";

// import { Userdata } from "../userdata";
import ReactDOM from "react-dom";
import Shop from "../shopComponents/Shop";

const initialFValues = {
    email: "",
    password: "",
    remember: false,
};

export default function SignInForm() {
    const users = useSelector((store) => store.users);

    const validate = (fieldValues = values) => {
        let temp = { ...errors };
        if ("password" in fieldValues)
            temp.password = fieldValues.password
                ? ""
                : "This field is required.";
        if ("email" in fieldValues)
            temp.email = /$^|.+@.+..+/.test(fieldValues.email)
                ? ""
                : "Email is not valid.";
        setErrors({
            ...temp,
        });

        if (fieldValues === values)
            return Object.values(temp).every((x) => x === "");
    };

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm,
    } = useForm(initialFValues, true, validate);

    const history = useHistory();
    // const { read } = Userdata(initialFValues);
    // console.log(React.version);
    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            console.log(users);
            for (const item of users) {
                if (
                    item.email === values.email &&
                    item.password === values.password
                ) {
                    history.push("/shop");
                    // window.alert("allowed");
                    // ReactDOM.render(<Shop />, document.getElementById("forShop"));
                } else {
                    console.log("wrong credentials");
                    <Redirect to="/signin" />;
                }
                resetForm();
            }
        }
    };

    const paperStyle = {
        padding: "30px 10px",
        width: "400px",
        margin: "0 auto",
        align: "center",
    };

    const avatarStyle = {
        backgroundColor: "#1bbd7e",
    };

    const headerStyle = {
        margin: "0",
    };

    return (
        <div id="ac" style={{ marginTop: "25vh" }}>
            <Form onSubmit={handleSubmit}>
                <Grid>
                    <Paper style={paperStyle}>
                        <Grid align="center">
                            <Avatar style={avatarStyle}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <h2 style={headerStyle}>Sign In</h2>
                            <Typography variant="caption">
                                Enter Email and password to login
                            </Typography>
                        </Grid>
                        <Grid align="center">
                            <Controls.Input
                                label="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                error={errors.email}
                            />
                            <Controls.Input
                                name="password"
                                label="Password"
                                value={values.password}
                                onChange={handleInputChange}
                                error={errors.password}
                                type="password"
                            />
                            <Controls.Checkbox
                                name="remember"
                                label="Remember Me"
                                value={values.remember}
                                onChange={handleInputChange}
                            />
                            <Controls.Button type="submit" text="Sign In" />
                        </Grid>
                    </Paper>
                </Grid>
            </Form>
        </div>
    );
}
