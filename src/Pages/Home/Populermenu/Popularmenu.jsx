 
import TitleSection from '../../../component/TitleSection/TitleSection';
import Menuitem from '../../Shared/menuitem/Menuitem';
import UseMenu from '../../../Hooks/UseMenu';
import { useEffect, useState } from 'react';

const Popularmenu = () => {

        const [menu] = UseMenu();
        
        const popular = menu.filter(item => item.category === 'popular')


        // const [popular, setPopular] = useState([])
        // useEffect( () => {
        //         fetch("menu.json")
        //         .then(res => res.json())
        //         .then(data => {
                        
        //                 const popularmenu = data.filter(item => item.category === 'popular');
        //                 setPopular(popularmenu)
                         

        //         })
        // // eslint-disable-next-line react-hooks/exhaustive-deps
        // },[ ])
        return (
                <div>
                        <section>
                                <TitleSection
                                        subHeading={"check out"}
                                        heading={"from our menu"}
                                ></TitleSection>

                                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                        popular.map(item => 
                                                <Menuitem
                                                key={item._id}
                                                item = {item}
                                                ></Menuitem>
                                                )
                                }
                                </div>
                                <div className='w-40 mx-auto'>
                                <button className="btn text-black btn-outline btn-success border-0 border-b-4 mt-8">View Full Menu</button>
                                </div>


                        </section>
                </div>
        );
};

export default Popularmenu;