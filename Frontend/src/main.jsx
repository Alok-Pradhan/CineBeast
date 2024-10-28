import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store.js'
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}> {/* Wrap your app with Provider */}
    <App />
  </Provider>
);