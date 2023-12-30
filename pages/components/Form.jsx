import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
const yupSchema = yup.object().shape({
    name: yup.string("Invalid email").required(),
    email:yup.string().email().required()
})
const Form = () => {
    const {useForm,} = useForm({
        
    })
  return (
    <form  className='w-1/2 flex flex-col justify-center items-center gap-4 border p-4'>
        <input className='px-2 py-1 text-black' type="text" name='name' placeholder='Name here' />
        <input className='px-2 py-1 text-black' type="email" name="email" placeholder='Email here' />
        <input className='px-2 py-1 text-black' type="password" name="password" />
        <input className='px-2 py-1 text-black' type="password" name="confirmPassword"/>
    </form>
  )
}

export default Form