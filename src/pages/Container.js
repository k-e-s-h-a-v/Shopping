import React, { useState, useEffect  }from "react";
import { Paper, Tabs, Tab, Typography, Box } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from '../shopComponents/Shop'

import SignInForm from "./SignIn";
import SignUpForm from "./SignUp";

const Container = () => {
  const paperStyle = {
    width: "420px",
    margin: "20px auto",
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    email: "intern@albanero.in",
    password: "dev",
  });

  useEffect(() => {
    setUsers([...users, user]);
  }, [user]);

  useEffect(() => {
    // setUsers(users.filter(item => item.email === ""));
    console.log(users);
  }, [users]);


  return (
    <div id="forShop">
      <Paper style={paperStyle} elevation={20}>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          centered
          // aria-label="disabled tabs example"
        >
          <Tab label="Sign In" />
          <Tab label="Sign Up" />
          {/* <Tab label="Disabled" disabled /> */}
        </Tabs>
        <TabPanel value={value} index={0}>
          <SignInForm users={users} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUpForm setUser={setUser}/>
        </TabPanel>
      </Paper>
    </div>
  );
};

export default Container;
