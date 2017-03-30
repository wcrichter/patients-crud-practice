import React from 'react'
import {Link} from 'react-router-dom'

const ListItem = (props) => {
  return (
    <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <img className="w2 h2 w3-ns h3-ns br3" src={props.image} alt="" />
      <div className="pl3 flex-auto">
        <span className="f6 db black-70">{props.title}</span>
        <span className="f6 db black-50">{props.sub}</span>
      </div>
      <div>
      <Link to={props.linkURL} className="f6 link blue hover-dark-gray">
          <i className="fa fa-user mr1" aria-hidden="true"></i>
          {props.linkDescription}
      </Link>
      </div>
    </li>
  )
}

ListItem.propTypes = {
  title: React.PropTypes.string,
  image: React.PropTypes.string,
  sub: React.PropTypes.string,
  linkURL: React.PropTypes.string,
  linkDescription: React.PropTypes.string
}

export default ListItem
