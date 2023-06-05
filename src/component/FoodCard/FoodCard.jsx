import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/UseCart";

 

const FoodCard = ({item}) => {
        // console.log(item)
        const [, refetch] = useCart()
        const {user} = useContext(AuthContext)
        const navigate = useNavigate();
        const location = useLocation()
        const {name, recipe, image, price,_id } = item;

        const handleAddToCart = item => {
          console.log(item)
         
          if(user&&user.email ){
             const cartItem = {
              name,
              price,
              image,
              email:user.email,
              itemId:_id
             };
            fetch('http://localhost:5000/carts' , {
              method:'post',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(cartItem)
            }
            )
            .then(res => res.json())
            .then(data => {
               if(data.insertedId){
                refetch();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Your product added to cart',
                  showConfirmButton: false,
                  timer: 1500
                })
               }
            })
          }
          else{
            Swal.fire({
              title: 'Please Login to Order the food',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Login now'
            }).then((result) => {
              if (result.isConfirmed) {
                 navigate('/login',{state: {from:location}})
              }
            })
          }
          }

        

        return (
                <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className="h-72 w-full" src= {image} alt="Shoes" /></figure>
                  <p className="absolute right-0 bg-black text-white md:mt-4 rounded-lg md:mr-6 px-2"> ${price}</p>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p> {recipe}</p>
                  <div className="flex flex-col items-center">
                    <button onClick={()=>handleAddToCart(item)} className="btn bg-slate-100 btn-outline btn-success border-0 border-blue-500  border-b-4 mt-8">Add To Cart</button>
                  </div>
                </div>
              </div>
        );
        };

export default FoodCard;