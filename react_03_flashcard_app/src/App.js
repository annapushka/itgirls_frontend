import './App.css';
import './assets/styles/styles.css'
import './assets/styles/normalize.css'
import WordList from './assets/components/WordList';
import Header from './assets/components/Header';
import CardSlider from './assets/components/CardSlider';
import { useState, useEffect } from 'react';

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
    <div className="App">
      {isLoaded ? (
        <>
          <Header></Header>
          <CardSlider words={data}></CardSlider>
          <WordList words={data}></WordList>
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
    );
}

export default App;
