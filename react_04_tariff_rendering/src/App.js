import './assets/styles/normalize.css'
import './assets/styles/styles.css'
import './App.css';
import Tariff from './assets/components/Tariff';

const tariffs = [
  {
    id: 1,
    name: 'Безлимитный 300',
    price: 300,
    speed: 10,
    info: 'Объем влюченного трафика не ограничен',
    color: 'blue',
    isSelected: false
  },
  {
    id: 2,
    name: 'Безлимитный 450',
    price: 450,
    speed: 50,
    info: 'Объем влюченного трафика не ограничен',
    color: 'green',
    isSelected: false
  },
  {
    id: 3,
    name: 'Безлимитный 550',
    price: 550,
    speed: 100,
    info: 'Объем влюченного трафика не ограничен',
    color: 'red',
    isSelected: true
  },
  {
    id: 4,
    name: 'Безлимитный 1000',
    price: 1000,
    speed: 200,
    info: 'Объем влюченного трафика не ограничен',
    color: 'black',
    isSelected: false
  },
]

function App() {
  return (
    <div className="App">
      <div className="container">
        {
          tariffs.map((tariff) =>
          <Tariff key={tariff.id} name={tariff.name} price={tariff.price} speed={tariff.speed} info={tariff.info} color={tariff.color} isSelected={tariff.isSelected}></Tariff>
          )
        }
      </div>
    </div>
  );
}

export default App;
