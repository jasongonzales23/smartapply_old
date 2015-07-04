'use strict'
var React = require('react');
var JobStore = require('../stores/JobStore');
var JobActions = require('../actions/JobActions');
var ENTER_KEY_CODE = 13;

var AddJob = React.createClass({

  getInitialState() {
    return {
      submitted: null,
      errors: {}
    };
  },

  isValid() {
    var fields = [ 'companyName', 'jobTitle'];
    var errors = {};

    fields.forEach( () => {
      var value = trim(this.refs[field].getDOMNode().value);
      if (!value) {
        errors[field] = 'This field is required';
        }
    });

    this.setState({errors: errors});
  },

  _save() {
    //do this to abstract what onSave does
    //this.props.onSave(this.state.value);
    // TODO trim whitespace before saving
    // TODO validate the form
    var data = {
      companyName: this.refs.companyName.getDOMNode().value,
      jobTitle: this.refs.jobTitle.getDOMNode().value
    };

    JobActions.createJob(data);

    /*
    * TODO clear out the form fields
    this.setState({
      value: ''
    });
    */
  },

  _onKeyDown() {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  },

  _onChange(event) {
    /*
    this.setState({
      value: event.target.value
    });
    */
  },

  render() {
    return (
      <div ref="jobForm">
        <input
          type="text"
          ref="companyName"
          name="companyName"
          placeholder="Company"
          onKeyDown={this._onKeyDown}
          onChange={this._onChange}
         />
        <input
          type="text"
          ref="jobTitle"
          name="jobTitle"
          placeholder="Job Title"
          onKeyDown={this._onKeyDown}
          onChange={this._onChange}
         />
        <button onClick={this._save}>Add Job</button>
      </div>
    );
  }
});

module.exports = AddJob;
