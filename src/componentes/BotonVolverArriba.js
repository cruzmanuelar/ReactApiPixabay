import React from 'react';
import { useEffect, useState } from 'react';

const BotonVolverArriba = () => {

    const [botonVolverArriba, setBotonVolverArriba] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scroll > 100){
                setBotonVolverArriba(true)
            }else{
                setBotonVolverArriba(false)
            }
        })
    },[])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }

    return(
        <div>
            <button style={{
                position: "fixed",
                bottom:"50px",
                right: "50px",
                height: "50px",
                width: "50px",
                fontSize: "50px"
            }}
            onClick={scrollUp}
            >
            volver
            </button>
        </div>
    )
}

export default BotonVolverArriba;