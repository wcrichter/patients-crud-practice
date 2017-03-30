import React from 'react'

const ProfileCard = (props) => {
  return (
    <article className="center bg-white br3 pa2 pa3-ns mv3 ba b--black-10 w-100 w-50-ns">
      <div>
        <img src={props.image} className="br3 h4 w4 dib ba b--black-05" title="Photo of a kitty staring at you" alt="" />
      </div>
      <ul className="list pa0">
        <li className="mb3 lh1">
          <span className="db mb1 gray f6">Name:</span>
          <span className="f3">{props.lastName}, {props.firstName}</span>
        </li>
        <li className="mb3 lh1">
          <span className="db mb1 gray f6">Gender:</span>
          {props.sex}
        </li>
        <li className="mb3 lh1">
          <span className="db mb2 gray f6">Address:</span>
          <span className="db">{props.street}</span>
          <span className="db">{props.city}, {props.state} {props.zip}</span>
        </li>
        <li className="mb3 lh1">
          <span className="db mb2 gray f6">Phone:</span>
          {props.phone}
        </li>
      </ul>
      {props.children}
    </article>
  )
}

export default ProfileCard
