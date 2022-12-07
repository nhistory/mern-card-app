import React, { useState } from 'react';
import '../css/createForm.css';
import { useNavigate } from 'react-router-dom';
import dataService from '../services/dataService';

const CreateForm = (props) => {
  //define state in this component using HOOKS!
  const [type, setType] = useState('');
  const [schedule, setSchedule] = useState('');
  const [startDate, setStartDate] = useState('');

  //use the hook provided by react router
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent the form from doing a browser submit

    //console.log(type, schedule, startDate);
    dataService.createClass(
      {
        type: type,
        schedule: schedule,
        startDate: startDate,
        teacher: {
          name: 'Bauer Barlow',
          email: 'bauerbarlow@email.com',
          phone: '902-123-4567',
          image: 'https://randomuser.me/api/portraits/women/73.jpg',
        },
        student: [
          {
            name: 'Jimmie Ochoa',
            motherName: 'Hinton Christian',
            phone: '354-239-8470',
            address: '9 Nichols Avenue, Moraida, Indiana',
          },
          {
            name: 'Flowers Molina',
            motherName: 'Pearlie Riddle',
            phone: '479-390-2590',
            address: '56 Lefferts Avenue, Bradenville, Rhode Island',
          },
        ],
      },
      (createSuccess) => {
        if (createSuccess) {
          navigate('/');
        } else {
          console.log('creation failed!!');
        }
      }
    );
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">
        Enlist New Class
      </h1>
      <label htmlFor="inputType" className="form-label">
        Class Type
      </label>
      <select
        className="form-select"
        name="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="" selected disabled hidden>
          Select class type
        </option>
        <option key="music" value="music">
          music
        </option>
        <option key="art" value="art">
          art
        </option>
        <option key="censory" value="censory">
          censory
        </option>
      </select>
      {/* <input
        type="text"
        id="inputType"
        name="type"
        onChange={(e) => setType(e.target.value)}
        className="form-control"
        placeholder="Class Type"
        required
        autoFocus
      /> */}
      <label htmlFor="inputSchedule" className="form-label">
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
      <label htmlFor="inputStartDate" className="form-label">
        Start Date
      </label>
      <input
        type="date"
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

export default CreateForm;
