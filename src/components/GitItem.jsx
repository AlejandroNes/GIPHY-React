
export const GitItem = ({ imagen, titulo }) => {
    return (
        <div className="card col-12 col-sm-6 col-md-4 rounded-0 p-2 plomo">
            <img src={imagen} className="card-img-top" alt={titulo} height='200' />
            <div className="card-body">
                <h5 className="card-title m-0 border text-center rounded-1 p-1">{titulo}</h5>
            </div>
        </div>
    )
}
