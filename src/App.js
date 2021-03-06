// Npm modules
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

// Importing components
import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import CreateFood from "./components/create-food.component";


// Main App 
function App() {
  return (
    <Router>
      <div className = "App">
        <Navbar />
        <br/>
        <Route path='/' exact component={ExercisesList} />
        <Route path='/edit/:id' component={EditExercise} />
        <Route path='/create'  component={CreateExercise} />
        <Route path='/user' component={CreateUser} />
        <Route path='/log' component  = {CreateFood} />
      </div>
    </Router>
  );
}

export default App;