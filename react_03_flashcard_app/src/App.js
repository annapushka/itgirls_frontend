import './App.css';
import './assets/styles/styles.css'
import './assets/styles/normalize.css'
import WordList from './assets/components/WordList';
import Header from './assets/components/Header';

const lists = [];

function App() {
  return (
    <div className="App">
        <Header></Header>
        <body>
            {
                lists.map((list) =>
                    <WordList key={list.id}></WordList>
                )
            }
        </body>
    </div>
    );
}

export default App;
