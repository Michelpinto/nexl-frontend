import { createContext } from 'react';
import { useQuery, gql } from '@apollo/client';

const launches_query_past = gql`
  {
    launchLatest(offset: 0) {
      mission_name
      id
      details
      launch_date_local
    }
    launchNext(offset: 0) {
      mission_name
      id
      details
      launch_date_local
    }
  }
`;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { data, loading, error } = useQuery(launches_query_past);

  //   const { id, mission_name, launch_date_local } = data.launchLatest;

  return (
    <AppContext.Provider value={[data, loading, error]}>
      {children}
    </AppContext.Provider>
  );
};
