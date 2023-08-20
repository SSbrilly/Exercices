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

  handleReset = () => {
    this.setState({
      items: [],
      newItem: "",
    });
  };

  render() {
    const { items, newItem } = this.state;

    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
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
