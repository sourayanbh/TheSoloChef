import MainPage from './MainPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from './Components/Redux/Store/recipeStore';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainPage />
      </div>
    </Provider>
    
  );
}

export default App;
