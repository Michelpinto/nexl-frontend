import { useEffect, useState, useContext } from 'react';
import { useQuery, gql } from '@apollo/client';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

function Homepage() {
  const [data, loading, error] = useContext(AppContext);

  if (!loading) {
    console.log(data.launchLatest.id);
    console.log(new Date(data.launchLatest.launch_date_local).toDateString());
  }

  return (
    <div>
      <h1>Home page</h1>

      {!loading && (
        <div>
          {/* Latest launch */}
          <div>
            <Link to={`/LastLaunch/${data.launchLatest.id}`}>
              <h1>Latest launch</h1>
            </Link>
            <h2>{data.launchLatest.mission_name}</h2>
            <p>
              {new Date(data.launchLatest.launch_date_local).toDateString()}
            </p>
          </div>

          {/* Next launch */}
          <div>
            <Link to={`/NextLaunch/${data.launchNext.id}`}>
              <h1>Next launch</h1>
            </Link>
            <h2>{data.launchNext.mission_name}</h2>
            <p>{new Date(data.launchNext.launch_date_local).toDateString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
