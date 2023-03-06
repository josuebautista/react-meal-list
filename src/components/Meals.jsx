import { useGlobalContext } from '../utils/context';
import MealCard from './MealCard';
import { Waveform } from '@uiball/loaders';

const Meals = () => {
  const { loading, meals, selectMeal, addToFavorites, favorited } = useGlobalContext();
  if (loading) {
    return <div className='container'>
      <div className="position-absolute top-50 start-50 translate-middle">
        <h4 className='fs-1 text-info'>
          <Waveform
            size={40}
            lineWeight={3.5}
            speed={1}
            color="black"
          />
        </h4>
      </div>
    </div>
  }
  if (meals.length < 1) {
    return <div className="position-absolute top-50 start-50 translate-middle">
      <h4 className='fs-1 text-info'>
        No meals matched your search term. Please try again.
      </h4>
    </div>
  }
  return <section className='row justify-content-center'>
    {
      meals.map((singleMeal) => {
        const { idMeal, strMeal: title, strMealThumb: image, strCategory: category, strArea: country, strYoutube: videoLink } = singleMeal

        return (
          <MealCard key={idMeal}
            idMeal={idMeal}
            image={image}
            title={title}
            category={category}
            country={country}
            videoLink={videoLink}
            // like={like}
            addToFavorites={addToFavorites}
            selectMeal={selectMeal}
            favorited={favorited}
          ></MealCard>
        )
      })
    }
  </section>
}

export default Meals;