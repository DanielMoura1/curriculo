import { useNavigate } from "react-router-dom";
export default function Tela2(){
    const navigate = useNavigate();
    function voltar(){
        navigate("/")
    }
    function   ligar(){
        let mensagem='olá, cheguei até você pelo seu currículo web';
        
        window.open('https://wa.me/5521990449994?text='+mensagem);

    }
    return( <> 
        <div className='bodyred'>
            <div className="barracontatos">
            <div onClick={voltar} className='homeico1'><ion-icon  size="large" name="home"></ion-icon></div>
            <div className='homeico2'><ion-icon  className='homeico2' size="large" name="contrast"></ion-icon></div> 
            </div>
            <p>Contato</p>
            <div className="boxContatos">
                
                <div className="caixaDeContados">
                    <div  >
                        <div className="textoContados"> <p>Linkedin: </p> <a href='https://www.linkedin.com/in/daniel-rodrigues-moura-352702204/'>Linkedin-DanielMoura</a></div>
                        <div className="textoContados"> <p>GitHub: </p> <a href='https://github.com/DanielMoura1'>DanielMoura1</a></div>
                        <div className="textoContados"> <p>email: </p> <a>daniel.bnh13@gmail.com</a></div>
                        <div className="textoContados"> <p>Whatsapp </p> </div>
                        <button onClick={ligar}> falar comigo pelo Whatsapp</button>
                    </div>
                </div>
                
                <div className="linhaPretaContado"></div>
                <div className="menuContatos"></div>
            </div>
        </div>
    </>)
}