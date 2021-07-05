import React, { Component } from "react";

export class Search extends Component {
  state = {
    text: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users...'
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
      </div>
    );
  }
}

export default Search;

// added a two way binding input using onChange
// used event e and target value for the input

// in case you have several inputs:

/*
 onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //here we are using the target's name from <input name="..."/>
*/

/*
// if we had a single input:
  onChange = (e) => this.setState({ text: e.target.value });

*/

// if you didn't use an arrow function you will to use this.bind....
