import React from 'react'
// Imagenes

import'./card-style.css'


const Card = props => {
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Mix1" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                100% Natural, SIN ADITIVOS. ¡Listas para consumir!                
                </p>
                <a href="#" className='btn btn-outline-success'>Ver más información</a>
            </div>
        </div>

    )

}

export default Card;