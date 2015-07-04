'use strict'
var React = require('react');
var JobStore = require('../stores/JobStore');
var JobActions = require('../actions/JobActions');
var ENTER_KEY_CODE = 13;

var AddJob = React.createClass({

  getInitialState() {
    return {
      value: this.props.value || ''
    };
  },

  _save() {
    //do this to abstract what onSave does
    //this.props.onSave(this.state.value);

    JobActions.createJob(this.state.value);
    this.setState({
      value: ''
    });
  },

  _onKeyDown() {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  },

  _onChange(event) {
    this.setState({
      value: event.target.value
    });
  },

  render() {
    return (
      <div>
        <input
          type="text"
          name="add-job"
          onChange={this._onChange}
          onKeyDown={this._onKeyDown}
          value={this.state.value}
         />
        <button onKeyDown={this._onKeyDown}>Add Job</button>
      </div>
    );
  }
});

module.exports = AddJob;
