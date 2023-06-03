import UseMenu from "../../Hooks/UseMenu";

 

const Sceret = () => {

        const [menu] = UseMenu();
        console.log(menu)
        return (
                 <div>
                        <p>hello secrettt</p>
                 </div>
        );
};

export default Sceret;