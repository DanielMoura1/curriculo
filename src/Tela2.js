import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
export default function Tela2(){
    const [cor,setCor] =useState('bodyred')
    const [cor2,setCor2] =useState('menuContatos')
    const [cor3,setCor3] =useState('barracontatos')
    const navigate = useNavigate();
    function trocar(){
        if(cor==='bodyred'){
            setCor('bodyred2')
            setCor2('menuContatos2')
            setCor3('barracontatos2')
        }else{
            setCor('bodyred')
            setCor2('menuContatos')
            setCor3('barracontatos')
        }
    }
    function voltar(){
        navigate("/")
    }
    function   ligar(){
        let mensagem='olá, cheguei até você pelo seu currículo web';
        
        window.open('https://wa.me/5521990449994?text='+mensagem);

    }
    return( <> 
        <div className={cor}>
            <div className="prenderBarraContatos">
                <div className={cor3}>
                    <div onClick={voltar} className='homeico1'><ion-icon  size="large" name="home"></ion-icon></div>
                    <div onClick={trocar} className='homeico2'><ion-icon  className='homeico2' size="large" name="contrast"></ion-icon></div> 
                </div>
                <div className="tituloContatos">
                    <p>Contato</p>
                </div>
                
            </div>
           
            
            <div className="boxContatos">
                
                <div className="caixaDeContados">
                    <div  >
                        <div className="textoContados"> <p>Linkedin: </p> <a href='https://www.linkedin.com/in/daniel-rodrigues-moura-352702204/'> Linkedin-DanielMoura</a></div>
                        <div className="textoContados"> <p>GitHub: </p> <a href='https://github.com/DanielMoura1'> DanielMoura1</a></div>
                        <div className="textoContados"> <p>E-mail: </p> <a> daniel.bnh13@gmail.com</a></div>
                        <div className="textoContados"> <p>Whatsapp </p> </div>
                        <button className="whatsapp" onClick={ligar}> Falar comigo pelo Whatsapp</button>
                    </div>
                </div>
                
                <div className="linhaPretaContado"></div>
                <div className={cor2}>
                    <div className="MenuContatoNavegar"> Navegador</div>
                    <div onClick={()=> navigate('/Trajetoria')} className="contatoTRAJ">Trajetória de vida</div>
                    <div onClick={()=> navigate('/Driven')} className="contatoDriven">Driven</div>
                    <div onClick={()=> navigate('/Habilidades')}  className="contatoHabilidade">Habilidades</div>
                    <div onClick={()=> navigate('/Curriculo')} className="contatoCuri">Currículo</div>
                </div>
            </div>
        </div>
    </>)
}