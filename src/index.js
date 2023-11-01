import React from 'react';
import {Routes , Route,Router,BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import Post from './component/job_post';
import Candidate from './component/candidate_signup';


import Home from './component/home';
import Job_list from './component/job_list';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path="/jobs" element={<Job_list></Job_list>}></Route>
      <Route path='/post'element={<Post></Post>}></Route>
      <Route path='/Register'element={<Candidate></Candidate>}></Route>
      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
