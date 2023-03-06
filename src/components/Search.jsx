import { useState } from "react";
import { useGlobalContext } from "../utils/context";
const Search = () => {
  const [text, setText] = useState('');
  const { setSearchTerm, fetchRandomMeal } = useGlobalContext();

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
    <header className="px-3 my-3 border-bottom mt-0 pt-4 mb-0" style={{ background: '#F5EEFD' }}>
      <div className="container-fluid">
        <div className="row d-flex justify-content-between">
          <div className="col-2">
            <button className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none bg-transparent border-0">
              <img src="/images/logo.png" className="bi me-2" width="40" height="40" alt='logo' />
            </button>
          </div>
          <div className="col-8">
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
        </div>
      </div>
    </header>
  )
}

export default Search