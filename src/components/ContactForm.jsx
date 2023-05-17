import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ContactForm = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [disabled, setDisabled] = useState(false);

    const toastifySuccess = () => {
        toast('Form sent!', {
          position: 'bottom-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: false,
          className: 'submit-feedback success',
          toastId: 'notifyToast'
        });
      };

      const onSubmit = async (data) => {
        setDisabled(true);

        const { name, email, message, template } = data;
        const templateParams = {
            name, email, message, template
        };

         axios
        .post("https://getform.io/f/1319c145-dd33-4e6e-861d-4bbf356add89", {
            name: templateParams.name,
            email: templateParams.email,
            message: templateParams.message,
            template: null
        }, 
        { headers: {'Accept': 'application/json'}})
        .then(response => console.log(response))
        .catch(error => console.log(error))
        
        reset();
        toastifySuccess();
        setDisabled(false);
    };
      
    
    return (
      <div className='ContactForm'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='contactForm'>
                <form id='contact-form' noValidate onSubmit={handleSubmit(onSubmit)} method="POST">
                  {/* Row 1 of form */}
                  <div className='row formRow'>
                    <div className='col-6'>
                      <input
                        type='text'
                        name='name'
                        {...register('name', {
                            required: { value: true, message: 'Please enter your name' },
                            maxLength: {
                              value: 30,
                              message: 'Please use 30 characters or less'
                            }
                          })}
                        className='form-control formInput'
                        placeholder='Name'
                      ></input>
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>
                    <div className='col-6'>
                      <input
                        type='email'
                        name='email'
                        {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                          })}
                        className='form-control formInput'
                        placeholder='Email address'
                      ></input>
                      {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>)}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <textarea
                        rows={3}
                        name='message'
                        {...register('message', {
                            required: true
                          })}
                        className='form-control formInput'
                        placeholder='Message'
                      ></textarea>
                       {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>
                  </div>
                  <button className='submit-btn' disabled={disabled} type='submit'>
                    Submit
                  </button>
                </form>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactForm;