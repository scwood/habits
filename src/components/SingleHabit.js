import PropTypes from 'prop-types'
import React, {Component} from 'react'

import Button from './Button'
import BackHeader from './BackHeader'
import TextInput from './TextInput'

export default class SingleHabit extends Component {
  static propTypes = {
    habit: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
  }

  state = {
    description: this.props.habit ? this.props.habit.description : '',
  }

  render() {
    return (
      <div>
        <BackHeader />
        <TextInput
          label="Description"
          value={this.state.description}
          onChange={(e) => this.setState({description: e.target.value})}
        />
        <Button
          success
          onClick={() =>
            this.props.handleSubmit(this.props.match.id, this.state)
          }
        >
          Submit
        </Button>
      </div>
    )
  }
}
