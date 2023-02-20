
import './App.css';
import { Button } from "@mui/material"
import Navbar from './Navbar';
import { getMatches } from './api/Api';
import { useEffect, useState } from 'react';
import Card from './Card';


function App() {

  const [matches, setmatches] = useState([]);
  useEffect(() => {
    getMatches()
      .then((data) => {
        setmatches(data?.data)
        console.log(data);
      }

      ).catch((err) => alert("Unable to load data"));
  }, []);




  return (
    <div className="App">
      <h1>Cricket Score</h1>
      
      <Navbar />


      {
        matches.map((match) => (
          <div style={{border:'1px solid grey'}}>
            <h1>Match : {match.name}</h1>
            <h1>Start Date : {match.startDate}</h1>
            <h1>End date : {match.endDate}</h1>
            <h1>No.of odi : {match.odi}</h1>
            <h1>No.of t20 : {match.t20}</h1>
            <h1>No. of test : {match.test}</h1>
            <h1>Squads : {match.squads}</h1>
            <h1>Total Matches : {match.matches}</h1>
          </div>
        ))
      }


    </div>
  );
}

export default App;

