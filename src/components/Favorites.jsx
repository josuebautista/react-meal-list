import { useGlobalContext } from '../utils/context';

const Favorites = () => {
  const { favorites, selectMeal, removeFromFavorites } = useGlobalContext();
  console.log('favorite renders');
  return (
    <section className="py-2 mb-4 border-bottom text-center mt-0" style={{ background: 'rgb(19, 51, 55, 0.9)' }}>
      <h5 className="fs-4 text-white">Favorites</h5>
      <div className="container-fluid " style={{ overflow: 'auto', whiteSpace: 'nowrap' }}>
        {
          favorites.map((item) => {
            const { idMeal, strMealThumb: image, strMeal: title } = item;
            return <div key={idMeal} style={{ width: '6rem', display: 'inline-block' }} className="mx-1">
              <div className="card p-0 bg-transparent border-0 mx-2">
                <img src={image}
                  className="card-img-top rounded-5"
                  alt={title}
                  style={{ width: '6rem', cursor: 'pointer' }}
                  onClick={() => selectMeal(idMeal, true)}
                  data-bs-toggle="modal" data-bs-target="#mealModal"
                />
                <div className="card-body pt-0 text-start">
                  <button className="btn btn-outline-secondary border-0 btn-sm text-white" onClick={() => removeFromFavorites(idMeal)}>
                    remove
                  </button>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </section>
  )
}

export default Favorites;