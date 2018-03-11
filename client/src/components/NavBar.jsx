import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item>
            KK
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
      </Segment>
    )
  }
}