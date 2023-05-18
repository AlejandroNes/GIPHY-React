import React from 'react'
import { Header } from './components/Header'
import { Formulario } from './components/Formulario'

export const App = () => {
    return (
        <div>
            <Header />

            <div className="container">
                {/* Formulario */}
                <Formulario />
            </div>

        </div>
    )
}
