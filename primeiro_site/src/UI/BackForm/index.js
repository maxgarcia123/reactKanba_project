import React from "react";

const BackForm = ({ submitHandler }) => {
  let _Backname, _Backdate;
  const handleSubmit = e => {
    submitHandler(e, {
      name: _Backname.value,
      date: _Backdate.value
    });
    clearForm();
  };

  const clearForm = () => {
    _Backdate.value = "";
    _Backname.value = "";
  };
  return (
    <form onSubmit={handleSubmit} className="form-inline">
      <label className="sr-only" htmlFor="inlineFormInput">
        back Name
      </label>
      <input
        type="text"
        ref={input => (_Backname = input)}
        className="form-control mb-2 mr-sm-2 mb-sm-0"
        id="inlineFormInput"
        placeholder="Set the Name"
      />

      <label className="sr-only" htmlFor="inlineFormInputGroup">
        back Date
      </label>
      <div className="input-group mb-2 mr-sm-2 mb-sm-0">
        <input
          type="text"
          ref={input => (_Backdate = input)}
          className="form-control"
          id="inlineFormInputGroup"
          placeholder="Set the Date"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
};

export default BackForm;
