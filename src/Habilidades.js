import { useNavigate } from "react-router-dom";
export default function Habilidades(){
    const navigate = useNavigate();
    function voltar(){
        navigate("/")
    }
    return( <> 
        <p> Habilidades</p>
        <p onClick={voltar}>voltar</p>
    </>)
    }