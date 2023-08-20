import React, { Component } from "react";

class TodoList extends Component {
  state = {
    items: [],
    newItem: "",
  };

  handleInputChange = (event) => {
    this.setState({ newItem: event.target.value });
  };

  handleAddItem = () => {
    const { newItem, items } = this.state;
    if (newItem.trim() !== "") {
      this.setState({
        items: [...items, newItem],
        newItem: "",
      });
    }
  };

  handleRemoveItem = (index) => {
    const { items } = this.state;
    const updatedItems = items.filter((_, i) => i !== index);
    this.setState({ items: updatedItems });
  };

  handleReset = () => {
    this.setState({
      items: [],
      newItem: "",
    });
  };

  render() {
    const { items, newItem } = this.state;
    const { render } = this.props;

    return (
      <div>
        {render(items, this.handleRemoveItem)}
        <input
          type="text"
          value={newItem}
          onChange={this.handleInputChange}
          placeholder="Add a new item"
        />
        <button onClick={this.handleAddItem}>Add</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default TodoList;
