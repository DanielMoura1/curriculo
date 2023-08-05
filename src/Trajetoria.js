import { useNavigate } from "react-router-dom";
export default function Trajetoria(){
    const navigate = useNavigate();
    function voltar(){
        navigate("/")
    }
    return( <> 
        <div className='bodyl'>
            <p>trajetória de vida</p>
            <div className="trajCaixa">
                <div onClick={()=>navigate('/TrajetoriaInicial')}  className="pessoal">
                    <img className='trajImagem' src='data:image/png;base64,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'></img> 
                    <div className="trajImagemTexto">
                        <p>Experiências iniciais na programação</p>
                    </div>
               
                </div>
                <div className="pessoal">
                    <img className='trajImagem' src='data:image/jpeg;base64,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'></img> 
                    <div className="trajImagemTexto">
                        <p>desenvolvimento web</p>
                    </div>
                </div>
            </div>
            <button onClick={voltar}>voltar</button>
           

        </div>
        
    </>)
    }
   