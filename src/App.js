import './App.css';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path = "/"/>
        <Skills path = "/skills"/>
        <Contact path = "/contact"/>
        <Projects path = "/projects"/>
      </Router>

    </div>
  );
}

export default App;
