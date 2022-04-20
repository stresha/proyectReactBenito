import './Formulario.css'
import { useForm } from 'react-hook-form'
import { useState } from "react";

 const Formulario = () => {

    const { register, handleSubmit , errors} = useForm();

    const {Entradas, setEntradas}   = useState([])
    const onSubmit = (data, e) => {
      console.log(data)
      setEntradas([
        ...Entradas,
        data
      ])
      e.target.reset()
    }
  
    return (

      <div>
        <h1 className='form_text'>Complete los datos !</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <input  className='form_campo' placeholder="Ingrese nombre"{...register("nombre", { required: true, maxLength: 20,  message: 'campo es requerido' })}></input>
        <span >
          {errors?.nombre?.message}
        </span>
        <input className='form_campo' placeholder="Ingrese telefono" type="number"{...register("telefono", { required: true, maxLength: 20 , message: 'campo es requerido' })}></input>
        <span >
          {errors?.telefono?.message}
        </span>
        <input className='form_campo' placeholder="Ingrese mail" type="email"{...register("mail", { required: true, maxLength: 20 ,  message: 'campo es requerido'})}></input>
        <span >
          {errors?.mail?.message}
        </span>
        <button type="submit" className='form_button'>Enviar</button>
      </form>


   
    
    </div>
    )
  };

export default Formulario