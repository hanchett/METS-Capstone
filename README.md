# METS 


This repository contains the code for our Informatics Capstone project. This website is designed for STEM teachers to use to help build their curriculums around educational technologies with a student-first focus. We allow teachers to search by the needs of their students, such as visual learners, non-native English speakers and more. Additonally, we're creating a community to enable collaboration between teachers, especially as they wrok through bringing their curriculums up to Next Generation Science Standards. 

## Working with MERN

REACT is the main driver in how we interact with this application, as it is finnicky and demands a certain coding style. Each JS document represents a component, either a page or an element within that page. The primary document is Index.js, which has all the "controllers" for the other documents. These are basically just governing what shows up when you type something into the URL, ex. http://localhost:3000/search. The Home page is coded into App.js (Which should probably be renamed to Home.js, but for the time being we'll just use App). 

### Each Component ###

When creating a new component, you need three things. Firstly, you need to import a few things: 
import  { React, Component } from 'react';
import NavBar from './NavBar';
import './css/ComponentName.css';

Each page in our site shares the common NavBar component, and each component requires the importing of the react Component object. 

Secondly, each component requires the same general setup of code below the imports: 
```class ComponentName extends Component {
    render() {
      [JavaScript Functions go here]
        return (
          <div> - React components need to return everything in a single wrapper tag, usually given a custom class for formatting. 
              <NavBar/> - Since each component requires this, it should almost always go at the top
              [HTML GOES HERE]
           </div>
        )
    }
export default ComponentName```
