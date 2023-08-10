import './App.css';
import MainWall from './components/greetwall/Greetwall'
// import Solutions from './components/solutions/solutions'
// import Form from './components/form/form'
// import About from './components/about/about'
// import Contact from './components/contact/contact'
// import Doings from './components/whatwedo/whatwedo'
// import Description from "./components/howitworks/howitworks";
import NavBar from './components/navbar/navbar'
import GreetWall from './components/greetwall/Greetwall'
// import Solutions from './components/solutions/solutions'
import WhatDeDO from './components/whatwedo/whatwedo'
import About from './components/about/about'
import Steps from './components/howitworks/howitworks'
import Solutions from './components/solutions/solutions'
import Form from './components/form/Form'
import Contact from './components/contact/contact';



function App() {
  return (
    <div className="App">
        {/* <MainWall/> */}
        {/* <Doings/>
        <Description/>
        <Solutions/>
        <About/>
        <Form/>
        <Contact/> */}
        <GreetWall/>
        <WhatDeDO/>
        <Steps/>
        <Solutions/>
        <About/>
        <Form/>
        <Contact/>
        {/* <NavBar/> */}
        {/* <Solutions/> */}

    </div>
  );
}

export default App;