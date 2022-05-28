import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

function Homepage() {
  const [data, loading] = useContext(AppContext);

  return (
    <div>
      {!loading && (
        <div className='launches'>
          {/* Latest launch */}
          <div className='link'>
            <Link to={`/LastLaunch/${data.launchLatest.id}`}>
              <h1>Last rocket launch</h1>
            </Link>
            <h2 className='mission-name'>{data.launchLatest.mission_name}</h2>
            <p>
              {new Date(data.launchLatest.launch_date_local).toDateString()}
            </p>
          </div>

          {/* Next launch */}
          <div className='link'>
            <Link to={`/NextLaunch/${data.launchNext.id}`}>
              <h1>Next rocket launch</h1>
            </Link>
            <h2 className='mission-name'>{data.launchNext.mission_name}</h2>
            <p>{new Date(data.launchNext.launch_date_local).toDateString()}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
