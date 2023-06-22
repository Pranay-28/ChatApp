import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import homepage from './pages/homepage';
import Chatpage from './pages/Chatpage';
function App() {
  return (
    <div className="App">
      <Route path='/'  component={homepage} exact/>
      <Route path='/chats' component={Chatpage} exact/>
    </div>
  );
}

export default App;
