import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import '../App.css';

function NextLauch() {
  const [data, loading] = useContext(AppContext);

  return (
    <div>
      <Link to='/'>
        <h3>back to Homepage</h3>
      </Link>

      {!loading && (
        <div className='latest-launch-div'>
          <h1>Next rocket launch</h1>
          <h1 className='mission-name'>{data.launchNext.mission_name}</h1>
          <h3 className='date'>
            {new Date(data.launchNext.launch_date_local).toDateString()}
          </h3>
          <p>{data.launchNext.details}</p>
        </div>
      )}
    </div>
  );
}

export default NextLauch;
