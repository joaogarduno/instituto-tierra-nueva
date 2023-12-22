import './App.css';
import MenuDeskTop from './Components/Menu/MenuDeskTop/MenuDeskTop';

function App() {
  return (
    <div className="App">

      {/* HEADER */}
      <header className='headerContent'>
        <div className='container'>
          <MenuDeskTop />
        </div>
      </header>

      {/* BANNER - SECTION */}

      {/* MAIN - CONTENT */}
      <main className='mainContent'>
        <section className='sectionContent'></section>
        <section className='sectionContent'></section>
        <section className='sectionContent'></section>
        <section className='sectionContent'></section>
        <section className='sectionContent'></section>
        <section className='sectionContent'></section>
      </main>

      <footer className='footerContent'></footer>
    </div>
  );
}

export default App;
