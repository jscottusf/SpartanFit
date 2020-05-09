import React from "react";

function AddWorkout(props) {
  return (
    <form className="text-center">
      <div className="form-group">
        <label for="workoutName">Workout Name</label>
        <input
          type="text"
          class="form-control"
          id="workoutName"
          name="workoutName"
          placeholder="Bicep Curls..."
          onChange={props.handleInputChange}
        />
      </div>
      <div className="form-group">
        <label for="workoutDescription">Description (Optional)</label>
        <textarea
          class="form-control"
          id="workoutDescription"
          name="workoutDescription"
          placeholder="Bicep Curls..."
          rows="2"
          onChange={props.handleInputChange}
        ></textarea>
        <div className="my-2">Type of Program</div>
        <div class="form-check text-left">
          <input
            class="form-check-input"
            type="radio"
            name="workoutType"
            id="workoutTypeFrequency"
            value="frequency"
            onChange={props.handleInputChange}
          />
          <label class="form-check-label" for="workoutTypeFrequency">
            Frequency
          </label>
        </div>
        <div class="form-check text-left">
          <input
            class="form-check-input"
            type="radio"
            name="workoutType"
            id="workoutTypeDuration"
            value="duration"
            onChange={props.handleInputChange}
          />
          <label class="form-check-label" for="workoutTypeDuration">
            Duration
          </label>
        </div>
      </div>
    </form>
  );
}

export default AddWorkout;
