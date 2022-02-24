import Menu from './components/Menu';

function App() {  
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Menu/>
      </section>
    </main>
  );
}

export default App;
