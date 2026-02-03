import { Provider } from 'react-redux';
import './App.css';
import StartPage from './components/StartPage';
import { IsChattingPageContextProvider } from './pageContext/IsChattingPageContextProvider';
import store from './redux/store';

function App() {
  return (
    <IsChattingPageContextProvider>
      <Provider store={store}>
        <StartPage />
      </Provider>
    </IsChattingPageContextProvider>
  );
}

export default App;
