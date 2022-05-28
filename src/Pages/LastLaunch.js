import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

function LastLaunch() {
  const [data, loading] = useContext(AppContext);

  return (
    <div>
      <div>
        <Link to='/'>
          <h1>homepage</h1>
        </Link>
        <h1>Latest launch</h1>
      </div>

      {!loading && (
        <div>
          <h1>{data.launchLatest.mission_name}</h1>
          <h2>
            {new Date(data.launchLatest.launch_date_local).toDateString()}
          </h2>
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
