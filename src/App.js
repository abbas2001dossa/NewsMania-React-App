import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize=6 ;
  apiKey= process.env.REACT_APP_NEWS_API;

  state ={
    progress:0
    
  }

  setProgress = ( progress) =>{
    this.setState({progress: progress})
  }


  render() {
    return (
      <div>
        

        <BrowserRouter>
          {/* Navbar code -> so it could load the options  */}
          <NavBar></NavBar>
          <LoadingBar
            color='#f11946'
            height={3}
            progress={ this.state.progress }
            // onLoaderFinished={() => setProgress(0)}
          />

          {/* Switch -> so it could alternate between the different components we want to show  */}
          <Routes>
            
            <Route exact path="/"  
              element={<News apiKey= {this.apiKey} setProgress={this.setProgress}  key="none" pageSize={this.pageSize} country='us' category='general'></News>}   >

            </Route>
            <Route exact path="/business" 
              element={<News apiKey= {this.apiKey} setProgress = { this.setProgress }  key="business" pageSize={this.pageSize} country='us' category='business'></News>} >
            </Route>
            <Route exact path="/entertainment" 
              element={<News apiKey= {this.apiKey} setProgress = { this.setProgress }  key="entertainment" pageSize={this.pageSize} country='us' category='entertainment'></News>} >
            </Route>
            <Route exact path="/general" 
              element={<News apiKey= {this.apiKey} setProgress = { this.setProgress }  key="general" pageSize={this.pageSize} country='us' category='general'></News> }  >
            </Route>
            <Route exact path="/health" 
              element={<News apiKey= {this.apiKey} setProgress = { this.setProgress }  key="health" pageSize={this.pageSize} country='us' category='health'></News>}  >
            </Route>
            <Route exact path="/science" 
              element={<News apiKey= {this.apiKey} setProgress = { this.setProgress }  key="science" pageSize={this.pageSize} country='us' category='science'></News>}   >
            </Route>
            <Route exact path="/sports" 
              element={<News apiKey= {this.apiKey} setProgress = { this.setProgress }  key="sports" pageSize={this.pageSize} country='us' category='sports'></News>} >
            </Route>
            <Route exact path="/technology" 
              element={<News apiKey= {this.apiKey} setProgress = { this.setProgress }  key="technology" pageSize={this.pageSize} country='us' category='technology'></News>} >
            </Route>


          </Routes>

        </BrowserRouter>


      </div>
    )
  }
}


