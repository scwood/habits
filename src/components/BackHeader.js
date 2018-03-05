import PropTypes from 'prop-types'
import React from 'react'
import {withRouter} from 'react-router'

const BackHeader = ({history}) => {
  return (
    <div className="bb b--black-10 pb3 fw6 mb4-ns mb3">
      <span className="pointer dim" onClick={() => history.goBack()}>
        <i className="fas fa-long-arrow-alt-left mr2" /> Back
      </span>
    </div>
  )
}

BackHeader.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(BackHeader)
