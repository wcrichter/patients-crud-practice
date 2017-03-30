import React from 'react'
import {connect} from 'react-redux'
import ListItem from '../components/list-item.js'
import {map} from 'ramda'
import {Link} from 'react-router-dom'
import moment from 'moment'

const patientToListItem = map(patient => ({
  _id: patient._id,
  title: patient.name.first + ' ' + patient.name.last,
  image: patient.avatar,
  sub: moment(patient.birthDate).fromNow(true) + ' old',
  linkURL: './patients/' + patient._id,
  linkDescription: 'View Patient'
}))

const List = (props) => {
  //const patients = createPatients(4)
  return (
    <div className="center w-100 w-50-ns">
      <h2 className="tc">Patient List</h2>
      <div className="center tc ma4">
        <Link to="/patients/new" className="f6 link dim br3 ph3 pv2 mb2 dib white bg-blue">Add Patient</Link>
      </div>
      <ul className="list pl0 mt0">
        {map(li => <ListItem key={li._id} {...li} />, patientToListItem(props.patients)
        )}
      </ul>
    </div>
  )
}

const connector = connect(state => state)

export default connector(List)
