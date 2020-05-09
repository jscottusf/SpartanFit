import React from "react";

function AddWorkout(props) {
  return (
    <form>
      <div className="form-group">
        <label for="workout-name">Workout Name</label>
        <input
          type="text"
          class="form-control"
          id="workoutName"
          name="workoutName"
          placeholder="Bicep Curls..."
          onChange={props.handleInputChange}
        />
      </div>
    </form>
  );
}

export default AddWorkout;
