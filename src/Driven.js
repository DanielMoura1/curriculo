import { useNavigate } from "react-router-dom";
export default function Driven(){
    const navigate = useNavigate();
    function voltar(){
        navigate("/")
    }
    return( <> 
    <div className='bodyrosa'>
        <p> Driven</p>
        <p onClick={voltar}>voltar</p>
    </div>
        
    </>)
    }