import Header from './components/Header'
import Main from './components/Main'
import Card from './components/Card'
import './App.css'
import data from './data'





function App() {

  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <Main />
      <section className="cards-list">

        {cards}
      </section>
    </div>
  );
}

export default App;
