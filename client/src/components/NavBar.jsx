import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state
    return (
      <Menu stackable>
        <Menu.Item>
          <img/>
        </Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        >
          Projects
        </Menu.Item>
        <Menu.Item
          name='connect'
          active={activeItem === 'connect'}
          onClick={this.handleItemClick}
        >
          Connect
        </Menu.Item>
      </Menu>
    )
  }
}