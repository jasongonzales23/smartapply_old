'use strict'
var React = require('react');
var Form = require('./Form');
var JobStore = require('../stores/JobStore');
var JobActions = require('../actions/JobActions');
var ENTER_KEY_CODE = 13;

var AddJob = React.createClass({
  formFields() {
    return [
      {companyName: 'Company Name'},
      {jobTitle: 'Job Title'},
      {salaryLow: 'Salary Low'},
      {salaryHigh: 'Salary High'},
      {equityLow: 'Equity Low'},
      {equityHigh: 'Equity High'},
      {siteUsed: 'Site Used'},
      {resumeUsed: 'Resume Used'},
      {coverLetterUsed: 'Cover Letter Used'},
      {notes: 'Notes'},
      {applicationDate: 'Application Date'},
      {currentStatus: 'Current Status'}
    ]
  },

  getInitialState() {
    return {
      submitted: null,
      errors: {}
    };
  },

  isValid() {
    //TODO, use my formFields obj instead
    var fields = [ 'companyName', 'jobTitle'];
    var errors = {};

    fields.forEach( (field) => {
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
    var data = {};

    this.formFields().forEach( (field) => {
      var key = Object.keys(field);
      data[key] = this.refs[key].getDOMNode().value;
    });

    JobActions.createJob(data);

    /*
    * TODO clear out the form fields
    this.setState({
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
      <div ref="jobForm" className="clearfix form-horizontal">
        {Form.renderTextInput('companyName', 'Company Name')}
        {Form.renderTextInput('jobTitle', 'Job Title')}
        {Form.renderTextInput('salaryLow', 'Salary Low')}
        {Form.renderTextInput('salaryHigh', 'Salary High')}
        {Form.renderTextInput('equityLow', 'Equity Low')}
        {Form.renderTextInput('equityHigh', 'Equity High')}
        {Form.renderTextInput('siteUsed', 'Site Used')}
        {Form.renderTextInput('resumeUsed', 'Resume Used')}
        {Form.renderTextInput('coverLetterUsed', 'Cover Letter Used')}
        {Form.renderTextInput('notes', 'Notes')}
        {Form.renderTextInput('applicationDate', 'Application Date')}
        {Form.renderTextInput('currentStatus', 'Current Status')}
        <div className="col-md-6 col-md-offset-4">
          <div className="form-group">
            <button className="btn btn-lg btn-primary pull-right" onClick={this._save}>Add Job</button>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = AddJob;
