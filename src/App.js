import "./App.css";
import React, { Component } from "react";

class App extends Component {
  boo = () => "JSX";

  render() {
    const name = "John Doe";

    const foo = () => "Bar";
    const loading = false;

    //if (loading) {
    //  return <h4>Loading...</h4>;
    //}

    const showName = true;

    return (
      <div className='App'>
        {loading ? (
          <h4>Loading...</h4>
        ) : (
          <h1>Hello {showName ? name : null}</h1>
        )}
        <h1>Hello {foo()}</h1>
        <h2>Hello {this.boo()}</h2>
      </div>
    );
  }
}

export default App;

/*
{showName ? name : null}
same as
show Name in varibale name if showName is true
{showName && name}
*/
