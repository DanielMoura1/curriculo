import { useNavigate } from "react-router-dom";
export default function Habilidades(){
    const navigate = useNavigate();
    function voltar(){
        navigate("/")
    }
    return( <> 
     <div className='bodyverde'>
        <p> Habilidades</p>
        <p onClick={voltar}>voltar</p>
     </div>
        
    </>)
    }