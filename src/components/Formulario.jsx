import React from 'react'

export const Formulario = () => {
    return (
        <form className='col-12 col-sm-8  p-2 border shadow-sm mx-auto my-4 d-flex'>
            <input
                type="text"
                className='form-control'
                placeholder='ingrese Gif'
            />
            <input type="submit" value='Buscar' className='boton' />
        </form>
    )
}
