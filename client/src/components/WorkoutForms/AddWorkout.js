import React from "react";

function AddWorkout(props) {
  return (
    <form className="text-center">
      <div className="form-group">
        <label for="workoutName">Workout Name</label>
        <input
          type="text"
          className="form-control"
          id="workoutName"
          name="workoutName"
          placeholder="Bicep Curls..."
          onChange={props.handleInputChange}
        />
      </div>
      <div className="form-group">
        <label for="workoutDescription">Description (Optional)</label>
        <textarea
          className="form-control"
          id="workoutDescription"
          name="workoutDescription"
          placeholder="Bicep Curls..."
          rows="2"
          onChange={props.handleInputChange}
        ></textarea>
        <div className="my-2">Type of Program</div>
        <div className="form-check text-left">
          <input
            className="form-check-input"
            type="radio"
            name="workoutType"
            id="workoutTypeFrequency"
            value="frequency"
            onChange={props.handleInputChange}
          />
          <label className="form-check-label" for="workoutTypeFrequency">
            Frequency
          </label>
        </div>
        <div className="form-check text-left">
          <input
            className="form-check-input"
            type="radio"
            name="workoutType"
            id="workoutTypeDuration"
            value="duration"
            onChange={props.handleInputChange}
          />
          <label className="form-check-label" for="workoutTypeDuration">
            Duration
          </label>
        </div>
      </div>
    </form>
  );
}

export default AddWorkout;
