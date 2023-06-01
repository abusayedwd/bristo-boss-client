import service from '../../src/assets/home/chef-service.jpg'

const Chefservice = () => {
        return (
                <div className='relative mt-16'>
                        <img style={{ height: '600px' }} src={service} alt="" />
                        <div className='absolute top-14 text-center bg-slate-200 w-[90%] ml-5 md:mt-8 md:w-[80%] md:h-80 px-20 md:pt-12 md:ml-20 rounded-xl bg-opacity-60'>
                                 
                                <h1 className='text-3xl text-fuchsia-400 font-mono font-bold'>Bristo Boss</h1>
                                <p className='mt-8 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                        </div>
                </div>
        );
};

export default Chefservice;