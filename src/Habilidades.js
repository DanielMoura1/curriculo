import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
export default function Habilidades(){
    let htmll ='data:image/png;base64,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';
    const navigate = useNavigate();
    const [cor,setCor] =useState('bodyverde')
    function voltar(){
        navigate("/")
    }
    function mudarCor(){
        if(cor ==='bodyverde'){
            setCor('newbodyverde')
        }else{
            setCor('bodyverde')
        }
       
    }
    return( <> 
     <div className={cor}>
        <div className="barraverde">
            <div onClick={voltar} className='homeico1'><ion-icon  size="large" name="home"></ion-icon></div>
            <div onClick={mudarCor} className='homeico2'><ion-icon  className='homeico2' size="large" name="contrast"></ion-icon></div> 
        </div>
        <p> Habilidades</p>
        <div className='barrahab'>
            <div className="barraTitulo"> front</div>
            <div className="barraimg">
                <img className='imgh' src={htmll}></img>
                <img className='imgh' src={htmll}></img>
                <img className='imgh' src={htmll}></img>
                <img className='imgh' src={htmll}></img>
                <img className='imgh' src={htmll}></img>
                <img className='imgh' src={htmll}></img>
                <img className='imgh' src={htmll}></img>
                <img className='imgh' src={htmll}></img>
            </div>
            
        </div>
        <div className='barrahab'>
            <div className="barraTitulo"> back</div>
            <div className="barraimg">
                <img className='imgh' src={htmll}></img>
            </div>
         
        </div>
        
     </div>
        
    </>)
    }