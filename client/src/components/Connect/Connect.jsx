import React, { Component } from 'react'
import './connect.css'

export default class Connect extends Component {
  state = {};
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
          <h1>Connect</h1>
          <h3>Have a question or want to work together?</h3>
        </div>

        <div className='form'>
          <form>
            <label id='name'>
              <input type='text' name='name' placeholder='Name' onChange={this.onChangeHandler} />
            </label>
              <br/>

            <label id='email'>
              <input type='text' name='email' placeholder='Email' onChange={this.onChangeHandler} />
            </label>
              <br/>

            <label id='message'>
              <input type='text' name='message' placeholder='Message' onChange={this.onChangeHandler} />
            </label>
              <br/>

            <input type='submit' value='Submit'/>
          </form>
        </div>
      </div>
    )
  }
}