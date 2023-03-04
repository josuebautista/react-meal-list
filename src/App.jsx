import './App.css';
import { useGlobalContext } from "./utils/context";
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import ModalComponent from './components/Modal';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  const { showModal } = useGlobalContext()

  return (
    <div>
      <Search />
      <div className="container-fluid text-center">
        <Favorites />
        {showModal && <ModalComponent />}
        <Meals />
      </div>
    </div>
  )
}

export default App;
