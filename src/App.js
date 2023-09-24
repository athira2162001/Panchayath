import React, { useState } from 'react'
import {BrowserRouter,Routes,Route,} from 'react-router-dom'

import Layout from './president/layout';
import Layout2_nav from './president/layout2_nav';
import Home from './president/home';
import Complaints from './president/complaints';
import Suggestion from './president/suggestion';
import Locate from './president/locate';
import Surveys from './president/surveys';
import Wardinfo from './president/wardinfo';
import Panchayathinfo from './president/panchaythinfo';
import Discussion from './discussions';
import Project from './president/project';
import Announcement from './president/announcement';
import Complaint_pan from './president/complaint_pan';
import AddWard from './president/addward'
import Institutes from './president/institutes';
import Login from './president/login';
import Signup from './president/signup';
import Addproject from './president/addproject';
import Addpanchayath from './president/addpanchayath';
import Projectreview from './president/projectreview';
import Addannouncement from './president/addannouncement';
import Addsuggestion from './president/addsuggestion';

function App() {


 
  
  return (
    
    <div>

        
     <BrowserRouter>
      <Routes>
    
      <Route path='login' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
       <Route path='/' element={<Layout/>}>
        <Route path='/layout2_nav'element={<Layout2_nav/>}>
        
        <Route path='/layout2_nav/panchaythinfo' element = {<Panchayathinfo/>}/>
        <Route path='/layout2_nav/discussions' element = {<Discussion/>}/>
        <Route path='/layout2_nav/project' element = {<Project/>}/>
        <Route path='/layout2_nav/announcement' element = {<Announcement/>}/>
        <Route path='/layout2_nav/complaint_pan' element = {<Complaint_pan/>}/>

        <Route path='/layout2_nav/wardinfo' element = {<Wardinfo/>}/>
        <Route path='/layout2_nav/institutes' element = {<Institutes/>}/>
</Route>
        <Route path='/' element = {<Home/>}/>
        <Route path='complaints' element = {<Complaints/>}/>
        <Route path='suggestion' element = {<Suggestion/>}/>
        <Route path='locate' element = {<Locate/>}/>
        <Route path='surveys' element = {<Surveys/>}/>
        <Route path='addward' element = {<AddWard/>}/>
        <Route path='addproject' element = {<Addproject/>}/>
        <Route path='addpanchayath' element = {<Addpanchayath/>}/>
        <Route path='projectreview' element = {<Projectreview/>}/>
        <Route path='addannouncement' element = {<Addannouncement/>}/>
        <Route path='addsuggestion' element = {<Addsuggestion/>}/>
        </Route>
        
      </Routes>
  </BrowserRouter>  


 
  
</div>
   
  )
}



export default App;


