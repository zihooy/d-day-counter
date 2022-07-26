import React, { useState } from 'react';
import DateNow from './DateNow.js';
import Moment from 'react-moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'moment-timezone';

function App() {

  const [formValue, setformValue] = useState({
    date: ''
  });

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    });
  }

  return (
    <div>
      <body>
        <div className="container">
          <div className="mt-5 pt-5 text-center fs-1 title">
            D-day Finder
          </div>
          <div className="mt-1 text-center fs-4">
            Check out the d-day and time
          </div>
          <div className="mt-5 text-center fs-4">
            It's <span className="fs-3"><DateNow></DateNow></span> Now
          </div>
          <div className="mt-5 text-center fs-4">
            Select the date and time you're waiting for
          </div>
          <div className="mt-1 text center d-flex justify-content-center">
            <div class="input-group mt-2 w-50">
              <input type="datetime-local" name="date" class="form-control" value={formValue.date} onChange={handleChange}></input>
            </div>
          </div>
          {formValue.date ? <div className="mt-5 text-center fs-1 title"><Moment date={formValue.date.toString()} durationFromNow></Moment> Left</div> : <div></div>}
        </div>
      </body>
      <footer class="text-white-50">
        <div className="text-center">
          <p>Demo project by <a href="https://github.com/zihooy" class="text-white">@Jihu Yang</a>.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
