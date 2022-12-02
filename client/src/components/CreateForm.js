import React, { useState } from 'react';
import '../css/signin.css';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
  //define state in this component using HOOKS!
  const [type, setType] = useState('');
  const [schedule, setSchedule] = useState('');
  const [startDate, setStartDate] = useState('');

  //use the hook provided by react router
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent the form from doing a browser submit
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">Please sign up</h1>
      <label htmlFor="inputType" className="sr-only">
        Class Type
      </label>
      <input
        type="text"
        id="inputType"
        name="type"
        onChange={(e) => setType(e.target.value)}
        className="form-control"
        placeholder="Class Type"
        required
        autoFocus
      />
      <label htmlFor="inputSchedule" className="sr-only">
        Schedule
      </label>
      <input
        type="text"
        id="inputSchedule"
        name="schedule"
        onChange={(e) => setSchedule(e.target.value)}
        className="form-control"
        placeholder="Schedule"
        required
      />
      <label htmlFor="inputStartDate" className="sr-only">
        Start Date
      </label>
      <input
        type="text"
        id="inputStartDate"
        name="startdate"
        onChange={(e) => setStartDate(e.target.value)}
        className="form-control"
        placeholder="Start Date"
        required
      />
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Create data
      </button>
    </form>
  );
};

export default Register;
