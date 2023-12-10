import React from 'react';
import './styles/container/app.scss'
import Nav from './components/Nav'
import Hero from './components/Hero'
import useElementDimensions from './custom/Hook/useElementDimensions';
import BlurEff from './components/BlurEff';
function App() {
   const navDimensions = useElementDimensions('.nav');
   const sideShowDimensions = useElementDimensions('.sideshow');
 
  return (
    <div className="App">
        <Nav />
        <Hero />
        <BlurEff navDimensions={navDimensions} sideShowDimensions={sideShowDimensions}/>
    </div>
  );
}

export default App;
