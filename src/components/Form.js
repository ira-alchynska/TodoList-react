import React, { Component } from 'react';
import shortid from 'shortid';

class Form extends Component {
  state = { name: '', tag: '', experience: 'junior', licence: false };

  nameInputId = shortid.generate();
  tagInputId = shortid.generate();

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', tag: '' });
  };

  handleLicenceChange = e => {
    this.setState({ licence: e.currentTarget.checked });
  };

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.tagInputId}>
          Lastname
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
            id={this.tagInputId}
          />
        </label>
        {/*  <p>Your degree</p>
        <label htmlFor="">
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          junior
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          middle
        </label>
        <label htmlFor="">
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          senior
        </label>

        <button type="submit">Send</button> */}
        {/*  <br />
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleLicenceChange}
          />
          I agree with licence
        </label>
        <button type="submit" disabled={!this.state.licence}>
          Send
        </button> */}
      </form>
    );
  }
}
export default Form;
