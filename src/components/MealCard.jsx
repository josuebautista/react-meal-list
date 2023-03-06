const MealCard = ({ idMeal, image, title, category, country, videoLink, addToFavorites, selectMeal, favorited }) => {
  return (
    <div className="col-md-4 col-sm-10 py-2">
      <div className="card rounded-4 bg-light">
        <button type="button" className="border-0 p-0 rounded-4" onClick={() => selectMeal(idMeal)} data-bs-toggle="modal" data-bs-target="#mealModal">
          <img src={image} className="card-img-top rounded-4" alt={title} />
        </button>
        <div className="card-body bg-light">
          <div className="row">
            <div className="col-3">
            </div>
            <div className="col-6">
              <h5 className="card-title">{title}</h5>
            </div>
            <div className="col-3">
              <button className="border-0 bg-transparent" onClick={() => addToFavorites(idMeal)}>
                <img
                  src={favorited(idMeal) ? "/images/like-clicked.png" : "/images/like.png"}
                  height={30} width={28} alt='like' ></img>
              </button>
            </div>
          </div>
        </div>
        <ul className="list-group list-group-flush bg-light rounded-4">
          <li className="list-group-item bg-light">
            <div className="row">
              <div className="col-6 text-end">
                Category:
              </div>
              <div className="col-6 text-start ps-1">
                {category}
              </div>
            </div>
          </li>
          <li className="list-group-item bg-light border-bottom-0">
            <div className="row">
              <div className="col-6 text-end">
                Country:
              </div>
              <div className="col-6 text-start ps-1">
                {country}
              </div>
            </div>
          </li>
          <li className="list-group-item bg-light border border-info rounded-4 rounded-top-0"><a className="text-decoration-none px-5" href={videoLink}>Link to video</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MealCard;