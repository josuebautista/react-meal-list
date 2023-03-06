import { useGlobalContext } from "../utils/context";
const ModalComponent = () => {
  const { selectedMeal, closeModal } = useGlobalContext();
  const { strMealThumb: image, strMeal: title, strInstructions: text, strSource: source } = selectedMeal;
  console.log('meal: ', title);
  
  return (
    <div className="modal fade" id="mealModal" tabIndex="-1" aria-labelledby="mealModalLabel" aria-hidden="true">
      {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> */}
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="card w-100" style={{ width: '18rem' }}>
              <img src={image} className="card-img-top object-fit-cover" alt={title} />
              <div className="card-body">
                <p className="modal-title fs-4">Instructions:</p>
                <p className="card-text">{text}</p>
              </div>
              <div className="card-body">
                <a href={source} className="card-link text-decoration-none fs-5 px-4" target="_blank" rel="noreferrer">Source</a>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal} data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComponent;