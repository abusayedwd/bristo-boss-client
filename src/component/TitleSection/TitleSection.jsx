 

 
const TitleSection = ({heading, subHeading}) => {
        return (
                <div className="mt-12">
                        <p className="text-center text-yellow-500">----{subHeading}-----</p>
                        <h1 className="text-2xl uppercase w-60 mx-auto text-center my-4 border-y-4 py-2 mb-6">{heading}</h1>
                </div>
        );
};

export default TitleSection;