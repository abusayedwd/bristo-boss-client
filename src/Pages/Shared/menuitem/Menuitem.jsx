import React from 'react';

const Menuitem = ({item}) => {
        const {name, price, recipe, image} = item;
        return (
                <div>
                        <div className='md:flex gap-4 ml-5'>
                                        <div><img style={{borderRadius:'0 200px 200px 200px'}} className='h-20 w-28' src={image} alt="" /></div>
                                        <div className=''>
                                                <h1 className='text-xl font-bold'>{name}---------</h1>
                                        <p> {recipe}</p>
                                        </div>
                                        <div><p className='text-yellow-400'>${price}</p></div>

                                </div>
                </div>
        );
};

export default Menuitem;