import { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext('');

function User({ children }) {
  const [user, setUser] = useState({});
  const value = useMemo(() => ({ user, setUser }), [user]);
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>

  );
}

User.propTypes = {
  children: PropTypes.node.isRequired,
};

export { User, UserContext };
