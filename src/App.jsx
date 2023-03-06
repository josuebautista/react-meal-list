import { useGlobalContext } from './utils/context';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './App.css';

import Search from './components/Search';
import Favorites from './components/Favorites';
import Meals from './components/Meals';
import ModalComponent from './components/Modal';

function App() {
  const { showModal, favorites } = useGlobalContext();

  return (
    <div>
      <Search />
      { favorites.length > 0 && <Favorites /> }
      <div className="container-fluid text-center">
        <Meals/>
        { showModal && <ModalComponent/>}
      </div>
    </div>
  )
}

export default App;
