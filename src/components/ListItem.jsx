import React from 'react'

export const ListItem = () => {
    return (
        <div className='border mt-3'>
            <h2 className='primario text-center text-white p-2 m-0'>Dragon Ball</h2>
            <div className="row m-0">
                <div className="card col-4 rounded-0 p-2 plomo">
                    <img src="/a.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title m-0 border text-center rounded-1 p-1">Oso peresoso</h5>
                    </div>
                </div>
                <div className="card col-4 rounded-0 p-2 plomo">
                    <img src="/a.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title m-0 border text-center rounded-1 p-1">Oso peresoso</h5>
                    </div>
                </div>
                <div className="card col-4 rounded-0 p-2 plomo">
                    <img src="/a.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title m-0 border text-center rounded-1 p-1">Oso peresoso</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
