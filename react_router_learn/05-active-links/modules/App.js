import React from 'react'
import { Link } from 'react-router'
import  NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Link activeStyle={{ color: 'red' }} to="/about">About</Link></li>
          <li><Link activeStyle={{ color: 'red' }} to="/repos">Repos</Link></li>
          <br/>
          <li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/repos" activeClassName="active">Repos</Link></li>
          <br/>
          <li><NavLink to="/about" >About</NavLink></li>
          <li><NavLink to="/repos" >Repos</NavLink></li>

      </ul>
        {this.props.children}
      </div>
    )
  }
})
