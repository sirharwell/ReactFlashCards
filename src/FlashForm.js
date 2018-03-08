import React from 'react';

class FlashForm extends React.Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name)
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          required
          placeholder="Add Flash Card"
        />
      </form>
    )
  }
}

export default FlashForm;
