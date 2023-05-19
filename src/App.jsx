import { useState } from 'react'
import { Header, Formulario, ListItem } from './components'
import { MensajeVacio } from './components/MensajeVacio';

export const App = () => {

    const [categorias, setCategorias] = useState([]);
    const [error, setError] = useState(false);

    const agregarCategoria = (categoria) => {
        if (categorias.includes(categoria)) {
            setError(true);
            setTimeout(() => {
                setError(false)
            }, 1500);
            return
        }
        setCategorias([categoria, ...categorias])
    }

    return (
        <div>
            <Header />

            <div className="container">
                {/* Formulario */}
                <Formulario
                    agregarCategoria={agregarCategoria}
                    error={error}
                    setError={setError}
                    setCategorias={setCategorias}
                />

                {/* Lista de Gifs */}
                {categorias.length < 1 ? (<MensajeVacio />) : (categorias.map(category => (
                    <ListItem key={category} category={category} />
                )))}

            </div>


        </div>
    )
}
