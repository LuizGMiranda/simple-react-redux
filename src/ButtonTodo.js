import React, { Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodosActions from "./store/actions/todos";

const ButtonTodo = ({ addTodo }) => (
  <Fragment>
    <button onClick={() => addTodo("Test")}>AddTodo</button>
  </Fragment>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(ButtonTodo);
