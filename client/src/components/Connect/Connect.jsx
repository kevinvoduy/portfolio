import React, { Component } from 'react'
import './connect.css'

export default class Connect extends Component {
  state = {
    name,
    email,
    message,
  };
  onChangeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmitHandler = (e) => {
    console.log('Something happend', e.target.name);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <div className='heading'>
          <h1>Contact</h1>}
          <h3>Have a question or want to work together?</h3>
        </div>

        <div className='form'>
          <form>
            <label>
              Name:
              <input type='text' name='name' onChange={this.onChangeHandler} />
            </label>

            <label>
              Email:
              <input type='text' name='email' onChange={this.onChangeHandler} />
            </label>

            <label>
              Message:
              <input type='text' name='message' onChange={this.onChangeHandler} />
            </label>
            <input type='submit' value='Submit'/>
          </form>
        </div>
      </div>
    )
  }
}