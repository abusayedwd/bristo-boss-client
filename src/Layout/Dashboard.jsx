 
import { FaBookmark, FaCalendar, FaCalendarAlt, FaEye, FaFileContract, FaHome, FaListAlt,  FaShoppingBag, FaShoppingCart, FaStreetView, FaWallet } from 'react-icons/fa';
import {  NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/UseCart';

const Dashboard = () => {
        const [cart] = useCart();
        return (
                <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
  <Outlet></Outlet>
       
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full  bg-green-500 text-base-content">
      {/* Sidebar content here */}
    
      <li> 
        <NavLink to ="/dashboard/userhome"> <FaHome></FaHome> User Home</NavLink >
      </li>
      <li> 
        <NavLink to ="/dashboard/reservation"> <FaCalendarAlt></FaCalendarAlt> Reservation</NavLink>
      </li>
      <li > 
        <NavLink to ="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My cart  <span className="badge badge-success">+{cart?.length || 0 }</span>
        </NavLink >
        
      </li>
      <li> 
        <NavLink to ="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink>
      </li>
      <li> 
        <NavLink to ="/dashboard/reviews"><FaEye></FaEye> Add Reviews</NavLink>
      </li>
      <li> 
        <NavLink to ="/dashboard/booking"><FaBookmark></FaBookmark> My Booking</NavLink>
      </li>
      <div className="divider bg-orange-400"></div>
      <li>
        <NavLink to ="/dashboard/home"><FaHome></FaHome> Home</NavLink>
      </li>
      <li>
        <NavLink to ="/dashboard/menu"> <FaListAlt></FaListAlt> Menu</NavLink>
      </li>
      <li>
        <NavLink to ="/dashboard/shop"><FaShoppingBag></FaShoppingBag> Shop</NavLink>
      </li>
      <li>
        <NavLink to ="/dashboard/contact"><FaFileContract></FaFileContract> Contact</NavLink>
      </li>
      
    </ul>
    
  
  </div>
</div>
        );
};

export default Dashboard;