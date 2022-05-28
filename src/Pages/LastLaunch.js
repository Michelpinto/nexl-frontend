import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import '../App.css';

function LastLaunch() {
  const [data, loading] = useContext(AppContext);

  return (
    <div>
      <Link to='/'>
        <h3>back to Homepage</h3>
      </Link>

      {!loading && (
        <div className='latest-launch-div'>
          <h1>Last rocket launch</h1>
          <h1 className='mission-name'>{data.launchLatest.mission_name}</h1>
          <h3 className='date'>
            {new Date(data.launchLatest.launch_date_local).toDateString()}
          </h3>
          <p>
            {data.launchLatest.details
              ? null
              : 'No details available for this Launch'}
          </p>
        </div>
      )}
    </div>
  );
}

export default LastLaunch;
