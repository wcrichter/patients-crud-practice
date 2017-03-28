import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <header className="pa4 bg-yellow white-70">
          <h1>Patients CRUD</h1>
        </header>
        <main className="pa4 black-80">
          <h2>Description</h2>
          <p>Practice Create, Read, Update, Delete</p>
          <p>In this exercise, you will build a patient list, the ability to add a patient, the ability to view a patient,
            the ability to view the patient and the ability to remove the patient</p>
          <h3>CheckList</h3>
          <ul>
            <li>[ ] - List Patients</li>
            <li>[ ] - Add New Patient</li>
            <li>[ ] - View Patient</li>
            <li>[ ] - Update Patient</li>
            <li>[ ] - Remove Patient</li>
          </ul>
          <p>More Info (see Readme)</p>
        </main>
      </div>
    );
  }
}

export default App;
