import React from 'react';
import 'App.css';
import propTypes from "prop-types";
import Counter from "Counter";


class App extends React.Component {
  state = { myquery : "", language : "" }

  onChange = (e) => {
    const { name, value} = e.target;
    this.setState({
      [name] : value,
    });
  };

  render() {
    return(
      <>
        <Counter onClick={() => console.log("clicked")}/>
        <input name="myquery" onChange={this.onChange} />
        <input name="language" onChange={this.onChange} /> 
        <hr />
        {JSON.stringify(this.state)}
      </>
    );
  }
}

export default App;