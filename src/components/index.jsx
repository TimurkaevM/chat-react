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
        <Questionnaire />
      </div>
    </div>
  );
}

export default App;
