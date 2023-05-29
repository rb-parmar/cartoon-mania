import React from 'react';
import {useForm} from 'react-hook-form';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function New() {

  const {register, handleSubmit} = useForm();

  const onFormSubmit  = data => console.log(data);

  const onErrors = errors => console.error(errors);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Add Character</title>
      </Helmet>
      <section className='container form'>
        <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
          <h3>Add new character</h3>
          <input 
            className='first-child'
            type='text' 
            placeholder='First name' 
            name='firstName' 
            {...register('firstName', { required: true, minLength: 2 })}
          />
          <input 
            type='text' 
            placeholder='Last name' 
            name='lastName' 
            {...register('lastName', { required: true, minLength: 2 })}
          />
          <input 
            type='text' 
            placeholder='Gender' 
            name='gender' 
            {...register('gender', { required: true, minLength: 2 })}
          />
          <input 
            type='text' 
            placeholder='Origin' 
            name='origin' 
            {...register('origin', { required: true, minLength: 2 })}
          />
          <input 
            type='text' 
            placeholder='Species' 
            name='species' 
            {...register('species', { required: true, minLength: 2 })}
          />
          <input 
            type='text' 
            placeholder='Status' 
            name='status' 
            {...register('status', { required: true, minLength: 2 })}
          />
          <input
            type='submit'
            value='Submit'
          />
        </form>
      </section>
    </HelmetProvider>
  )
}

export default New;