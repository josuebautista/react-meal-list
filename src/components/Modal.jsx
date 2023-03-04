import { useGlobalContext } from "../utils/context";

const ModalComponent = () => {
  const { selectedMeal } = useGlobalContext();
  const { strMealThumb: image, strMeal: title, strInstructions: text, strSource: source } = selectedMeal;
  console.log(title);
  return (
    <div className="modal fade" id="mealModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="card w-100" style={{ width: '18rem' }}>
              <img src={image} className="card-img-top object-fit-cover" alt={title}/>
              <div className="card-body">
                <p className="card-text">{text}</p>
              </div>
              <div className="card-body">
                <a href={source} className="card-link text-decoration-none fs-5">Source</a>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalComponent