/* eslint-disable react/jsx-no-target-blank */
import React from 'react';


const Imagen = (props) => {

    const {largeImageURL, likes, previewURL, tags, views} = props.imagen;

    return(
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} target="_blank" alt={tags} className="card-img-top"></img>
                <div className="card-body text-center text-dark">
                    <p className="card-text textoB">{likes} Me gusta</p>
                    <p className="card-text textoB">{views} Vistas</p>
                    <a href={largeImageURL} target="_blank" className="btn btn-success btn-block rounded-0">Ver Imagen</a>
                </div>
            </div>
        </div>
    )
} 

export default Imagen;