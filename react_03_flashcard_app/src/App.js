import './App.css';
import './assets/styles/styles.css'
import './assets/styles/normalize.css'
import WordList from './assets/components/WordList';
import Header from './assets/components/Header';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <WordList></WordList>
    </div>
    );
}

export default App;
