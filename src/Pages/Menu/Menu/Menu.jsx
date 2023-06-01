import { Helmet  } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import UseMenu from '../../../Hooks/UseMenu';
import TitleSection from '../../../component/TitleSection/TitleSection';
import MenuCategory from '../MenuCategory/MenuCategory';
 

const Menu = () => {
        const [menu] = UseMenu();
        const offered = menu.filter(item => item.category === 'offered')
        const pizza = menu.filter(item => item.category === 'pizza')
        const dessert = menu.filter(item => item.category === 'dessert')
        const salad = menu.filter(item => item.category === 'salad')
        const soup = menu.filter(item => item.category === 'soup')
        return (
                <div>
                      <Helmet>
        <title>Bristo Boss | Menu</title>

           </Helmet>
           {/* main cover */}
           <Cover
           img = {coverImg}
           title = {"our menu"}
           ></Cover>
           <TitleSection subHeading={"Don't miss"} heading={"todays offer"}></TitleSection>
           {/* offered menu item */}
           <MenuCategory items = {offered}></MenuCategory>
           {/* dessert menu items */}
           <MenuCategory title = 'dessert' items={dessert} img={dessertImg}></MenuCategory>
           {/* pizza menu */}
           <MenuCategory title = 'pizza' items={pizza} img={pizzaImg}></MenuCategory>
           {/* salad menu */} 
           <MenuCategory title = 'salad' items={salad} img={saladImg}></MenuCategory>
           {/* sout menu */} 
           <MenuCategory title = 'soup' items={soup} img={soupImg}></MenuCategory>
            
                </div>
        );
};

export default Menu;