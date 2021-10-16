import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Footer />

        {/* 
      Address, Contact, Phone Number
      Header (logo, menu, contact us)
      Slider image/text
      Services
      Clients worked with
      Testimonials
      Get in Touch
      Footer

      */}
      </div>
    </Router>
  );
}

export default App;
