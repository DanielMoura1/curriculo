import { useNavigate } from "react-router-dom";
export default function Curriculo(){
    const navigate = useNavigate();
    function voltar(){
        navigate("/")
    }
    return( <> 
    <div className='bodyroxo'>
        <p>Curriculo</p>
        <p onClick={voltar}>voltar</p>
    </div>
        
    </>)
    }