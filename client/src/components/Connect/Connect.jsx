import React, { Component } from 'react';
import './connect.css';

export default class Connect extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onChangeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    return (
      <div id="connect">
        <div className="heading">
          <h1>{'Let\'s get connected.'}</h1>
          <h2>Have a question or want to work together?</h2>
        </div>

        <div id="form">
          <form>
            <label htmlFor="name">
              <input type="text" name="name" placeholder="Name" onChange={this.onChangeHandler} />
            </label>
            <br />

            <label htmlFor="email">
              <input type="text" name="email" placeholder="Email" onChange={this.onChangeHandler} />
            </label>
            <br />

            <label htmlFor="message">
              <textarea type="textarea" name="message" placeholder="Message" onChange={this.onChangeHandler} />
            </label>
            <br />

            <input id="submit" value="SUBMIT" />
          </form>
        </div>
      </div>
    );
  }
}
