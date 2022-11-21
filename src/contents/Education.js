 import React, { Component } from 'react'
 import Widecard from '../components/Widecard';

 class Education extends Component {
     render() {
         return(
             <div className="condiv">
                 <h1 className="subtopic">My Education</h1>
                 
                 <Widecard title="Department of Electronics Engineering Technology" where="king mongkut's university of technology north bangkok" from="2019" to="Present" />
                 
                 <Widecard title="Math-Science" where="watkhemapirataram school" from="2016" to="2018" />
             </div>
         );
     }
 }
 
 export default Education;