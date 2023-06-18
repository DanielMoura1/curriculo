import { useNavigate } from "react-router-dom";
export default function Trajetoria(){
    const navigate = useNavigate();
    function voltar(){
        navigate("/")
    }
    return( <> 
        <p>trajetória de vida</p>
        <p onClick={voltar}>voltar</p>
    </>)
    }