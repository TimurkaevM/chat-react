import { Route } from 'react-router-dom';
import Contacts from './Contacts';
import Messages from './Messages';

function App() {
  return (
    <div className="App">
      <div className="messeger">
        <Contacts />
        <Route path="/:id?">
          <Messages />
        </Route>
      </div>
    </div>
  );
}

export default App;
