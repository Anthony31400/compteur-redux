import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  count: state,
});

const CounterContaineur = ({ count, dispatch }) => {
  return (
    <div>
      <p>Compteur : {count} </p>
      <button onClick={() => dispatch({ type: "ADD" })}>ADD</button>
      <button onClick={() => dispatch({ type: "ADDTEN" })}>ADDTEN</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
      <button onClick={() => dispatch({ type: "REMOVETEN" })}>REMOVETEN</button>
      <button onClick={() => dispatch({ type: "REMOVE" })}>REMOVE</button>
    </div>
  );
};

export default connect(mapStateToProps)(CounterContaineur);

/* const addAction = {
  type: "ADD",
};

const removeAction = {
  type: "REMOVE",
};

const addTenAction = {
  type: "ADDTEN",
};
const removeTenAction = {
  type: "REMOVETEN",
};

const resetAction = {
  type: "RESET",
}; */
