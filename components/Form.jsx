'use strict'
var React = require('react');

var Form = {
  renderTextInput: function(id, label) {
    return this.renderField(id, label,
      <input type="text" className="form-control" id={id} ref={id} />
    )
  },

  renderField: function(id, label, field) {
    return <div className="form-group">
      <label htmlFor={id} className="col-sm-4 control-label">
        {label}
      </label>
      <div className="col-sm-6">
        {field}
      </div>
    </div>
  }
}
//TODO pass these onKeyDown, onChange methods?

module.exports = Form;
