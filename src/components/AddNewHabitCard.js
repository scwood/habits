import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

import Card from './Card';

const AddNewHabitCard = () => {
  return (
    <Link to="/habits/new">
      <Card>
        <div className="dim pointer pa2 tc fw6 black-50">
          <FontAwesomeIcon icon={faPlus} className="mr2" />
          Create new habit
        </div>
      </Card>
    </Link>
  );
};

export default AddNewHabitCard;
