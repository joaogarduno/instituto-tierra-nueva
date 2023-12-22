import './App.css';
// MENU
import MenuDeskTop from './Components/Menu/MenuDeskTop/MenuDeskTop';
import MenuMobile from './Components/Menu/MenuMobile/MenuMobile';

function App() {
  return (
    <div className="App">

      {/* HEADER */}
      <header className='headerContent'>
        <div className='container'>
          <MenuDeskTop />
          <MenuMobile />
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
