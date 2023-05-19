import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff, faMagnifyingGlass, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

export const Formulario = ({ agregarCategoria, error, setError, setCategorias }) => {

    const [nombreCat, setNombreCat] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombreCat.trim().length <= 1) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 1500);
            return
        }

        agregarCategoria(nombreCat);
        setNombreCat('');
    }

    const handleLimpiar = () => {
        const confirmar = confirm("¿Desea limpiar la página?");
        if (confirmar) {
            setCategorias([]);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='col-12 col-sm-8  p-2 border shadow-sm mx-auto my-4 d-flex'>
            <input
                type="text"
                className='form-control'
                placeholder='ingrese Gif'
                value={nombreCat}
                onChange={(e) => setNombreCat(e.target.value.toUpperCase())}
            />
            {error ? (
                <button
                    type='submit'
                    className='boton-error'>
                    <FontAwesomeIcon icon={faCircleExclamation} />
                </button>
            ) : (
                <button
                    type='submit'
                    className='boton'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            )}
            <button className='boton-warning' onClick={handleLimpiar}>
                <FontAwesomeIcon icon={faPowerOff} />
            </button>
        </form>
    )
}
