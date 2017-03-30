import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

import List from './pages/list'
import Form from './pages/form'
import Profile from './pages/profile'


// List Patients
// Add Patient
// Show Patient
// Edit Patient
// Remove Patient

// display the patients
// create a patient form to add new patients
// create a patient page to view patient information when selected from the patient list
// edit the patient when clicking the edit button from the patient show screen
// prompting and removing the patient when clicking the remove button from the view patient screen

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="pa4 bg-yellow white-70">
            <h1>Patients CRUD</h1>
          </header>
          <main className="pa4 black-80">
          <Route exact path="/" component={List} />
          <Switch>
            <Route path="/patients/new" component={Form} />
            <Route path="/patients/:id" component={Profile} />
          </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
