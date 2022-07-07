/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../App.css';

const Imagen = (props) => {

    const {largeImageURL, likes, webformatURL, tags, views} = props.imagen;

    return(
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
            <div className="card">
                
                <img src={webformatURL} target="_blank" alt={tags} className="card-img-top"></img>
                <div className="card-body text-center text-light">
                    <div className='box-flexbox'>

                        <span className="card-text textoB">
                            <li className="fas fa-heart">
                            </li>
                            {' '}{likes}
                        </span>
                        <span className="card-text textoB">
                            <li className="fas fa-eye">
                            </li>
                            {' '}{views}
                        </span>


                    </div>

                    <a href={largeImageURL} target="_blank" className="btn textoB btn-color btn-block rounded-0">Ampliar</a>
                </div>
            </div>
        </div>
    )
} 

export default Imagen;