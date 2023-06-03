import { useContext, useEffect,  useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import login2 from '../../assets/others/authentication2.png'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
         
        const [disabled, setDisabled] = useState(true)
        const [error, setError] = useState('')
        const {signIn} = useContext(AuthContext)
        const location = useLocation();
        const navigate = useNavigate()

        let from = location.state?.from?.pathname || "/";
        useEffect( () => {
                loadCaptchaEnginge(6);
        },[]);
        const handleLogin = event => {
                event.preventDefault();
                const form = event.target;

                const email = form.email.value;
                const password = form.password.value;
                console.log(email, password)

                signIn(email, password)
              .then(result => {
                const userLogged = result.user;
                console.log(userLogged)
                setError(' ');
                form.reset('')

                Swal.fire({
                        title: 'User login Success!!',
                        showClass: {
                          popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                          popup: 'animate__animated animate__fadeOutUp'
                        }
                      });
                      navigate(from, { replace: true });


              })
              .catch(error => {
                setError('Email or Password not match')
                console.log(error)
              }) 

                
        }
         const handlevalidateChapcha = (e) => {
                const chapchaValue =  e.target.value;
                 if(validateCaptcha(chapchaValue)){
                        setDisabled(false)
                 } 
         }
        return (
               <div>
                <Helmet>
                        <title> Bristo Boss | Login </title>
                </Helmet>
                 <div className="hero min-h-screen bg-base-200">
                        <div className="md:flex gap-4">
                                <div className="text-center w-[60%]">
                                        
                                         <img src={login2} alt="" />
         </div>
        <div className="card w-[40%] shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                <h1 className="text-3xl font-bold">Login now!</h1>
                        <div className="form-control">
                                <label className="label">
                                        <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email"
                                name="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                                <label className="label">
                                        <span className="label-text">Password</span>
                                </label>
                                <input type="password" 
                                name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                        </div>
                        <div className="form-control">
                                <label className="label">
                                <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handlevalidateChapcha} type="text"  
                                name="chapcha" placeholder="chapcha" className="input input-bordered" />
                                 
                                        
                        </div>
                        <p>{error}</p>
                        <div className="form-control mt-6">
                                <input disabled ={disabled} className="btn btn-primary" type="submit" value="Login" />

                        </div>
                </form>
                <p  className="text-center mb-4">
                        New Heare? <Link className='text-blue-600 font-sans' to = '/signup'>Signup</Link>
                </p>
         </div>
         </div>
                </div>
               </div>
        );
};

export default Login;