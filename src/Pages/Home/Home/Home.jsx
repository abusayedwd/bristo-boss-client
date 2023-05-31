import Chefservice from "../../../component/Chefservice";
import Benner from "../Benner/Benner";
import Category from "../Catregory/Category";
import Chefcomand from "../Chefrecommand/Chefcomand";
import Contact from "../Contact/Contact";
import Features from "../Features/Features";
import Popularmenu from "../Populermenu/Popularmenu";
import Testimonial from "../Testimonials/Testimonial";

const Home = () => {
        return (
                <div>
                        <Benner></Benner>
                        <div className="my-16">
                        <Category></Category>
                        <Chefservice></Chefservice>
                        <Popularmenu></Popularmenu>
                        <Contact></Contact>
                        <Chefcomand></Chefcomand>
                        <Features></Features>
                        <Testimonial></Testimonial>
                        </div>
                </div>
        );
};

export default Home;