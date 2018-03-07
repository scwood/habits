import PropTypes from 'prop-types'
import React, {Component} from 'react'

import Button from './Button'
import BackHeader from './BackHeader'
import TextInput from './TextInput'

export default class HabitForm extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    habit: PropTypes.object,
    handleSubmit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func,
  }

  state = {
    description: this.props.habit ? this.props.habit.description : '',
  }

  componentWillReceiveProps(nextProps) {
    const {habit} = nextProps
    if (habit && habit.description !== this.state.description) {
      this.setState({description: habit.description})
    }
  }

  render() {
    const habitId = this.props.match.params.id
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
          onClick={() => this.props.handleSubmit(habitId, this.state)}
        >
          Submit
        </Button>
        {habitId && (
          <Button danger onClick={() => this.props.handleDelete(habitId)}>
            Delete
          </Button>
        )}
      </div>
    )
  }
}
