import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodosActions from "./store/actions/todos";
import * as InputActions from "./store/actions/input";

class ButtonTodo extends Component {
  saveTodo = valorInput => {
    try {
      if (!!valorInput.length) {
        this.props.addTodo(valorInput);
      } else {
        alert("Input Vazio");
      }
    } finally {
      this.props.cleanInput();
    }
  };

  render() {
    return (
      <Fragment>
        <button onClick={() => this.saveTodo(this.props.valorInput)}>
          AddTodo
        </button>
      </Fragment>
    );
  }

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    valorInput: PropTypes.string
  };
}

const mapStateToProps = state => ({
  valorInput: state.input.text
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...TodosActions, ...InputActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonTodo);
