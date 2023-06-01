import Cover from "../../Shared/Cover/Cover";
import Menuitem from "../../Shared/menuitem/Menuitem";

 

const MenuCategory = ({items,title, img}) => {
        return (
                <div>
        { title && <Cover  img = {img} title = {title} ></Cover>} 
        
        
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-16'>
                                {
                                        items.slice(0,4).map(item => 
                                                <Menuitem
                                                key={item._id}
                                                item = {item}
                                                ></Menuitem>
                                                )
                                                 
                                }
                                </div>
                                <div className="flex flex-col items-center mb-14">
                                <button className="btn text-black btn-outline btn-success border-0 border-b-4 mt-8">ORDER YOUR FAVOURITE FOOD</button>
                                </div>

          </div>            
        );
};

export default MenuCategory;