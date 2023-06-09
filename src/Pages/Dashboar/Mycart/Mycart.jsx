import React from 'react';
import useCart from '../../../Hooks/UseCart';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Mycart = () => {
        const [cart,refetch] = useCart()
        const total = cart.reduce((sum, item) => item.price+sum , 0)

        const handleDelete = item => {
                Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to delete this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                           fetch(`http://localhost:5000/carts/${item._id}`,{
                                method:'DELETE'
                           })
                           .then(res => res.json())
                           .then(data => {
                                if(data.deletedCount > 0){
                                        refetch();
                                        Swal.fire(
                                                'Deleted!',
                                                'Your file has been deleted.',
                                                'success'
                                              )
                                }
                           })
                        }
                      })
        }

        return (
                <div>
                        <Helmet>
                                <title> Bristo Boss | my cart</title>
                        </Helmet>
                        <div className='uppercase font-semibold flex justify-evenly gap-4 items-center my-10'>
                        <h1>Total Item : {cart.length}</h1>
                        <h1>Total price: ${total}</h1>
                        <button className="btn btn-warning btn-sm">PAY</button>
                </div>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
           #
        </th>
        <th>Food</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      { 
         cart.map((item, index) => 
         <tr key={item._id}>
        <th>
          <label>
            {index + 1}
          </label>
        </th>
        <td>
           
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src= {item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
        </td>
        <td>
        {item.name}          
        </td>
        <td className='text-end'> ${item.price}</td>
        <th>
          <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-400"><FaTrashAlt></FaTrashAlt></button>
        </th>
      </tr>
         ) 
      }
      
      
     
    </tbody>
     
  </table>
</div>


                </div>

                
        );
};

export default Mycart;