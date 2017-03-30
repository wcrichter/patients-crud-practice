import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.css'

const Form = (props) => {
  return (
    <div>
      <h2 className="tc">Add Patient</h2>
      <div className="center tc ma4">
        <Link to="/" className="f6 link blue hover-dark-gray"><i className="fa fa-chevron-left mr1" aria-hidden="true"></i>Back to Patients</Link>
      </div>
      <form className="center ba br3 pa3 b--black-10 w-100 w-50-ns">
        <label className="db mb1">First Name</label>
        <input className="db mb3 w-100"/>
        <label className="db mb1">Last Name</label>
        <input className="db mb3 w-100"/>
        <label className="db mb1">Sex</label>
        <input className="db mb3 w-50 w-25-m w-25-l"/>
        <label className="db mb1">Birthdate</label>
        <input className="db mb3 w-75 w-50-m w-50-l"/>
        <label className="db mb1">Street</label>
        <input className="db mb3 w-100"/>
        <label className="db mb1">City</label>
        <input className="db mb3 w-100"/>
        <label className="db mb1">State</label>
        <input className="db mb3 w-25"/>
        <label className="db mb1">Zip</label>
        <input className="db mb3"/>
        <label className="db mb1">Phone</label>
        <input className="db mb3"/>
        <button>Submit</button>
      </form>
    </div>
  )
}

const connector = connect(state => state)

export default connector(Form)
