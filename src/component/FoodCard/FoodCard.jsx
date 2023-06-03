 

const FoodCard = ({item}) => {
        console.log(item)
        const {name, recipe, image, price, category} = item;
        return (
                <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className="h-72 w-full" src= {image} alt="Shoes" /></figure>
                  <p className="absolute right-0 bg-black text-white md:mt-4 rounded-lg md:mr-6 px-2"> ${price}</p>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p> {recipe}</p>
                  <div className="flex flex-col items-center">
                    <button className="btn bg-slate-100 btn-outline btn-success border-0 border-blue-500  border-b-4 mt-8">Add To Cart</button>
                  </div>
                </div>
              </div>
        );
};

export default FoodCard;