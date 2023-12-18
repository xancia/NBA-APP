/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Teams from "./components/Teams"
import Games from "./components/Games"
import { useEffect } from "react"
import { useDispatch } from 'react-redux';
import { setTeamData } from "./components/store/teamDataSlice"
import Form from "./components/Form"


function App() {
  const url = 'https://free-nba.p.rapidapi.com/teams?page=0';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_KEY,
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    }
  };
  const dispatch = useDispatch()
  
  async function fetchData(){
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result.data);
      // dispatch(setTeamData(result.data))
      let newData = result.data.map((data) => {
        return ({
        ...data,
        href: `/logos/${data.abbreviation}.png`

        })})
        console.log(newData)
        dispatch(setTeamData(newData))
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])



  

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/teams/:id" element={<Games />} />
        <Route path="/contact" element={<Form />} />
      </Routes>
    </div>
  )
}

export default App
