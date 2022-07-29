import './App.css';
import './assets/styles/styles.css'
import './assets/styles/normalize.css'
import WordList from './assets/components/WordList';

const lists = [];

function App() {
  return (
    <div className="App">
            {
                lists.map((list) =>
                    <WordList key={list.id}></WordList>
                )
            }
        </div>
    );
}

export default App;
