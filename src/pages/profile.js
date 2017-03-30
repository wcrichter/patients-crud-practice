import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ProfileCard from '../components/profile-card'
import {path,find,propEq} from 'ramda'

class ViewPatient extends React.Component {
  constructor (){
    super()
    this.state = {}
  }

  componentDidMount () {
    const patient = find(propEq('_id', this.props.match.params.id), this.props.patients)
    this.props.dispatch({type: 'SET_PATIENT', payload: patient})
    console.log(patient)
  }

  render() {
    const patient = this.props.patient
    return (
      <div>
        <h2 className="tc">Patient Profile</h2>
        <div className="center tc ma4">
          <Link to="/" className="f6 link blue hover-dark-gray"><i className="fa fa-chevron-left mr1" aria-hidden="true"></i>Back to Patients</Link>
        </div>
        <ProfileCard
          image={patient.avatar}
          firstName={path(['name', 'first'], patient)}
          lastName={path(['name', 'last'], patient)}
          street={path(['address', 'street'], patient)}
          city={path(['address', 'city'], patient)}
          state={path(['address', 'state'], patient)}
          zip={path(['address', 'zipCode'], patient)}
          phone={patient.phone}
          sex={patient.sex}
          birthDate={patient.birthDate}
          >
          <button>Edit</button>
          <button>Delete</button>
        </ProfileCard>
      </div>
    )
  }
}

const connector = connect(function(state) {
  return {
    patients: state.patients,
    patient: state.patient
  }
})

export default connector(ViewPatient)
