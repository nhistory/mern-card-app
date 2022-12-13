import React from 'react';
import '../css/main.css';

import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
  //console.log(props.oneClass);
  return (
    <div key={props.oneClass._id} className="col-md-4">
      <div className="card mb-4 box-shadow">
        <img
          className="card-img-top"
          alt="Thumbnail [100%x225]"
          style={{ height: 225, width: '100%', display: 'block' }}
          src={props.oneClass.teacher.image}
          data-holder-rendered="true"
        />
        <div className="card-body">
          <ul className="card-text">
            <li>Teacher Name: {props.oneClass.teacher.name}</li>
            <li>Schedule: {props.oneClass.schedule}</li>
            <li>Start Date: {props.oneClass.startDate}</li>
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              {/* <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                View
              </button> */}
              <Link
                to={`/editForm/${props.oneClass._id}`}
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Edit
              </Link>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => props.onDelete(props.oneClass._id)}
              >
                Delete
              </button>
            </div>
            <small className="text-muted">
              Class type: {props.oneClass.type}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
