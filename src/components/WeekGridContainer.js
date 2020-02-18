import {connect} from 'react-redux';

import WeekGrid from './WeekGrid';
import {toggleDay} from '../store/habits';

const mapStateToProps = (state, ownProps) => {
  return {habit: ownProps.habit};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGridClick: (id, date) => {
      dispatch(toggleDay(id, date));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekGrid);
