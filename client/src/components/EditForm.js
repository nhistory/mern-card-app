import React, { useEffect, useState } from 'react';
import '../css/createForm.css';
import { useNavigate, useParams } from 'react-router-dom';
import dataService from '../services/dataService';

const EditForm = (props) => {
  //define state in this component using HOOKS!
  const [type, setType] = useState('');
  const [schedule, setSchedule] = useState('');
  const [startDate, setStartDate] = useState('');
  const [errors, setErrors] = useState('');

  //use the hook provided by react router
  const navigate = useNavigate();

  const { classId } = useParams();
  useEffect(() => {
    dataService.getOneClass(classId, (oneClass) => {
      //console.log(oneClass);
      setType(oneClass.type);
      setSchedule(oneClass.schedule);
      setStartDate(oneClass.startDate);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); //prevent the form from doing a browser submit

    //console.log(type, schedule, startDate);
    dataService.updateClass(
      classId,
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
      (error) => {
        if (!error) {
          navigate('/');
        } else {
          const errors = error.data.errors;
          setErrors(errors);
          console.log(errors);
        }
      }
    );
  };

  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal text-center">Edit Class</h1>
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
      {errors.type && (
        <div className="alert alert-danger">{errors.type.message}</div>
      )}
      <label htmlFor="inputSchedule" className="form-label">
        Schedule
      </label>
      <input
        type="text"
        id="inputSchedule"
        name="schedule"
        onChange={(e) => setSchedule(e.target.value)}
        className="form-control"
        placeholder={schedule}
      />
      {errors.schedule && (
        <div className="alert alert-danger">{errors.schedule.message}</div>
      )}
      <label htmlFor="inputStartDate" className="form-label">
        Start Date
      </label>
      <input
        type="date"
        id="inputStartDate"
        name="startdate"
        onChange={(e) => setStartDate(e.target.value)}
        className="form-control"
        value={startDate}
      />
      {errors.startDate && (
        <div className="alert alert-danger">{errors.startDate.message}</div>
      )}

      <button className="btn btn-lg btn-primary btn-block" type="submit">
        Edit data
      </button>
    </form>
  );
};

export default EditForm;
