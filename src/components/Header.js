import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({displayName, onSignOutClick}) => {
  return (
    <div className="dt pv4-ns pv3 w-100">
      <div className="dtc v-mid f5 f4-ns fw6 tl">
        <Link to="/">Habit Tracker</Link>
      </div>
      <div className="dtc v-mid f6 fw6 tr">
        <a className="dim pointer" onClick={onSignOutClick}>
          Sign out ({displayName})
        </a>
      </div>
    </div>
  );
};

Header.propTypes = {
  displayName: PropTypes.string.isRequired,
  onSignOutClick: PropTypes.func.isRequired,
};

export default Header;
