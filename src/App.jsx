import React from 'react'
import { Header } from './components/Header'
import { Formulario } from './components/Formulario'
import { ListItem } from './components/ListItem'

export const App = () => {
    return (
        <div>
            <Header />

            <div className="container">
                {/* Formulario */}
                <Formulario />

                {/* Lista de Gifs */}
                <ListItem />
                <ListItem />
                <ListItem />

            </div>


        </div>
    )
}
