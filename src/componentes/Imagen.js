/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

const Imagen = (props) => {

    const {largeImageURL, likes, webformatURL, tags, views} = props.imagen;

    return(
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
            <div className="card">
                <img src={webformatURL} target="_blank" alt={tags} className="card-img-top"></img>
                <div className="card-body bg-primary text-center text-light">
                    <p className="card-text textoB"><li className="fas fa-heart"></li> {likes}</p>
                    <p className="card-text textoB"><li className="fas fa-eye"></li> {views}</p>
                    <a href={largeImageURL} target="_blank" className="btn btn-success btn-block rounded-0">Ampliar</a>
                </div>
            </div>
        </div>
    )
} 

export default Imagen;