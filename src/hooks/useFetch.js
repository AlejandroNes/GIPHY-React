import { useEffect, useState } from 'react'
import { getAPI } from '../helpers/getAPI';

export const useFetch = (category) => {

    const [datos, setDatos] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    //peticion a la API
    const funcionDatos = async () => {
        const respuesta = await getAPI(category);
        setDatos(respuesta);
        setIsLoading(false)

    }

    useEffect(() => {
        funcionDatos();
    }, [])

    return {
        datos,
        isLoading
    }
}
