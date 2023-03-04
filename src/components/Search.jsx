import { useState } from "react";
import { useGlobalContext } from "../utils/context";
const Search = () => {
  const [text, setText] = useState('');
  const { setSearchTerm,  fetchRandomMeal } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      // setText('');
    }
  }
  const handleRandomMeal = () => {
    setSearchTerm('')
    setText('')
    fetchRandomMeal()
  }
  return (
    <header className="p-3 my-3 border-bottom mt-0 pt-4" style={{ background: '#F5EEFD' }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-1">
            <button className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none bg-transparent border-0">
              <img src="/images/logo.png" className="bi me-2" width="40" height="40" alt='logo' />
            </button>
          </div>
          <div className="col-6">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-8">
                  <input type="text" className="form-control rounded-4" placeholder="Search..." aria-label="Search" value={text} onChange={handleChange} style={{ background: '#EEEEFD' }} />
                </div>
                <div className="col-4">
                  <button className="btn btn-dark w-100 rounded-4"><strong>Search</strong></button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-2">
            <button className="btn btn-outline-dark w-100 rounded-4" onClick={handleRandomMeal}>Random</button>
          </div>
          <div className="col-3">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li><button className="nav-link px-2 link-dark bg-transparent border-0">Inventory</button></li>
            </ul>
          </div>
          {/* <div className="dropdown text-end">
            <a className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
            </a>
            <ul className="dropdown-menu text-small">
              <li><a className="dropdown-item">New project...</a></li>
              <li><a className="dropdown-item">Settings</a></li>
              <li><a className="dropdown-item">Profile</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item">Sign out</a></li>
            </ul>
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Search