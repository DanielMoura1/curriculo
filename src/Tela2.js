import { useNavigate } from "react-router-dom";
export default function Tela2(){
    const navigate = useNavigate();
    function voltar(){
        navigate("/")
    }
    return( <> 
        <div className='bodyred'>
            <p>Contato</p>
            <p onClick={voltar}>voltar</p>
        </div>
    </>)
}