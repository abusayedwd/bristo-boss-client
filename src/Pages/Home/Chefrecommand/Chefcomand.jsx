import salat1 from '../../../assets/menu/salad-bg.jpg'
import salat2 from '../../../assets/menu/pizza-bg.jpg'
import salat3 from '../../../assets/menu/dessert-bg.jpeg'
import TitleSection from '../../../component/TitleSection/TitleSection';

const Chefcomand = () => {
        return (
                <div className='m-10'>
                      <section>
                        <TitleSection
                        subHeading={'Shuld try'}
                        heading={'chef recommand'}
                        ></TitleSection>
                    <div className='grid md:grid-cols-3 gap-5'>
                    <div className="card  bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                        <img src= {salat1} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                        <h2 className="card-title">Caeser Salad</h2>
                                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                        <div className="card-actions">
                                        <button className="btn btn-outline border-0 border-b-4 btn-success">Add To Cart</button>
                                        </div>
                                </div>
                        </div>
                      <div className="card  bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                        <img src= {salat2} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                        <h2 className="card-title">Caeser Salad</h2>
                                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                        <div className="card-actions">
                                        <button className="btn btn-outline border-0 border-b-4 btn-success">Add To Cart</button>
                                        </div>
                                </div>
                        </div>
                      <div className="card  bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                        <img src= {salat3} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                        <h2 className="card-title">Caeser Salad</h2>
                                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                        <div className="card-actions">
                                        <button className="btn btn-outline border-0 border-b-4 btn-success">Add To Cart</button>
                                        </div>
                                </div>
                        </div>
                    </div>
                      </section>
                </div>
        );
};

export default Chefcomand;