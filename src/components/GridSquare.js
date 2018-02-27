import React, {Component} from 'react'

class GridSquare extends Component {
  state = {
    clicked: false,
  }

  render() {
    const classes = 'ma1 ' + (this.state.clicked ? 'bg-green' : 'bg-light-gray')
    return (
      <div
        style={{width: '12%', paddingBottom: '12%', margin: '1.14%'}}
        onClick={this.handleClick}
        className={classes}
      />
    )
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
}

export default GridSquare
