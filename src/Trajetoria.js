import { useNavigate } from "react-router-dom";
export default function Trajetoria(){
    const navigate = useNavigate();
    function voltar(){
        navigate("/")
    }
    return( <> 
        <div className='bodyl'>
            <p>trajetória de vida</p>
            <p onClick={voltar}>voltar</p>
        </div>
        
    </>)
    }