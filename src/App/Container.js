import React from "react";
import { connect } from "react-redux";

const addUser = (user) => {
  return {
    type: "UPDATE_USERS",
    payload: user,
  };
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: () => dispatch(addUser()),
  };
};

const UserList = (props) => {
  const { users, addUser } = props;



  return;
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
