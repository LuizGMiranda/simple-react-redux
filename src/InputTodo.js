import React, { Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as InputActions from "./store/actions/input";

const InputTodo = ({ text, writeInput }) => (
  <Fragment>
    <input
      type="text"
      value={text}
      onChange={e => writeInput(e.target.value)}
    />
  </Fragment>
);

const mapStateToProps = state => ({
  text: state.input.text
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(InputActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputTodo);
