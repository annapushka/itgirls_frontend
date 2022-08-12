import './App.css';
import './assets/styles/styles.css'
import './assets/styles/normalize.css'
import WordList from './assets/components/WordList';
import Header from './assets/components/Header';
import CardSlider from './assets/components/CardSlider';
import NoMatch from './assets/components/NoMatch';
import { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://itgirlschool.justmakeit.ru/api/words')
    .then((result) => result.json())
    .then((data) => {
      setData(data);
      setIsLoaded(true);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        {isLoaded ? (
          <>
            <Header></Header>
            <Routes>
              <Route exact path='/game' element={<CardSlider words={data} />} />
              <Route exact path='/' element={<WordList words={data} />} />
              <Route path="*" element={<NoMatch/>} />
            </Routes>
          </>
        ) : (
          <div className='dots-container'>
            <div className='dot'>A</div>
            <div className='dot'>
              <div className='face'></div>
            </div>
            <div className='dot'>Z</div>
          </div>
        )} 
      </div>
    </Router>
    );
}

export default App;
