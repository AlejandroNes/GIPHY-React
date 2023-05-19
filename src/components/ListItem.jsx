import { GitItem } from './';
import { useFetch } from '../hooks/useFetch';

export const ListItem = ({ category }) => {

    const { datos, isLoading } = useFetch(category);

    return (
        <div className='border mt-3'>
            <h2 className='primario text-center text-white p-2 m-0'>{category}</h2>
            {isLoading ? (
                <div className="sk-circle">
                    <div className="sk-circle1 sk-child"></div>
                    <div className="sk-circle2 sk-child"></div>
                    <div className="sk-circle3 sk-child"></div>
                    <div className="sk-circle4 sk-child"></div>
                    <div className="sk-circle5 sk-child"></div>
                    <div className="sk-circle6 sk-child"></div>
                    <div className="sk-circle7 sk-child"></div>
                    <div className="sk-circle8 sk-child"></div>
                    <div className="sk-circle9 sk-child"></div>
                    <div className="sk-circle10 sk-child"></div>
                    <div className="sk-circle11 sk-child"></div>
                    <div className="sk-circle12 sk-child"></div>
                </div>
            ) : (
                <div className="row m-0">

                    {datos.map(item => (
                        <GitItem key={item.id} {...item} />
                    ))}

                </div>
            )}
        </div>
    )
}
