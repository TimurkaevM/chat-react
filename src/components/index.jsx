import { Route } from 'react-router-dom';
import Contacts from './Contacts';
import Messages from './Messages';
import Questionnaire from './Questionnaire';

function App() {
  return (
    <div className="App">
      <div className="messeger">
        <Contacts />
        <Route path="/:id?">
          <Messages />
        </Route>
        <Route path="/:id?">
          <Questionnaire />
        </Route>
      </div>
    </div>
  );
}

export default App;
