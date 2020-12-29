import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div class = "page-container">
      <Header
        setAboutSelected={setAboutSelected}
        setPortfolioSelected={setPortfolioSelected}
        setContactSelected={setContactSelected}
        setResumeSelected={setResumeSelected}
      ></Header>
      <main>
        <div>
          {aboutSelected && <About></About>}
          {portfolioSelected && <Portfolio></Portfolio>}
          {contactSelected && <Contact></Contact>}
          {resumeSelected && <Resume></Resume>}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
