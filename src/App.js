import React from 'react';
import Navbar from './components/Navbar/navbar'
import './app.css';
import Right from './components/rightpart/rightpart';
import Center from './components/center/center'
import imeg from './imgd.jpeg'

function App() {
  return (
    <div >
       <Navbar/>
      <div className="row">
       
            <div className="col-sm-3 bgcolor"><Right/></div>
             <div className="col-sm-9">
             <div className="row">
               <div className="col-sm-8">
               <Center/>
               </div>
               <div className="col-sm-4">

                 <div className="bottom">
                 <button type="button" className="btn btn-outline-primary">App Setting</button>
  <button type="button" className="btn btn-outline-secondary">Camera</button>
  <button type="button" className="btn btn-outline-success">Action</button> <br/>
                 </div>
              
  <div>
    <img  src={imeg}/>

  </div>
              </div>
             </div>
             
             
             
             </div>
      </div>
  
    </div>
  );
}

export default App;
