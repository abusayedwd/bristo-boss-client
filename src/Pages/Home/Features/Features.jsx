 import './Features.css'
import TitleSection from '../../../component/TitleSection/TitleSection';
import featuer from '../../../assets/home/featured.jpg'
import moment from 'moment';

const Features = () => {
        return (
           <div className='feature-bg text-white bg-fixed'>
                        <TitleSection
                        subHeading={'check out'}
                        heading={'from our menu'}
                        ></TitleSection>
                    <div className='md:flex items-center px-24 py-16 gap-8 bg-slate-600 bg-opacity-30'>
                          <div>
                                <img className='' src={featuer} alt="" />
                          </div>
                          <div className='px-4'>
                                <p>WHERE CAN I GET SOME?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsa at sit amet consectetur adipisicing elit. A ipsa at nesciunt quaerat nesciunt quaerat!</p>
                                <p className='text-xl uppercase'>{moment().format('MMMM Do YYYY')}</p>
                                <button className="btn btn-outline btn-success border-0 border-b-4 mt-8">Order Now</button>
                          </div>
                           
                   </div>
           </div>
        );
};

export default Features;