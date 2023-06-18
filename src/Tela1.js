import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
export default function Tela(){
    const navigate = useNavigate();
    let fila1 =['pd','pd','pd','pd','bloco','jogador','bloco','pd','pd','contatos']
    let fila2 =['historia','pd','pd','bloco','bloco','bloco','bloco','bloco','bloco','bloco']
    let fila3 =['bloco','bloco','bloco','bloco','pd','bloco','pd','pd','bloco','pd',]
    let fila4 =['bloco','pd','bloco','pd','pd','bloco','pd','pd','pd','pd',]
    let fila5 =['driven','pd','bloco','habilidades','pd','bloco','bloco','bloco','bloco','curriculo',]
    let tabuleiro =[fila1,fila2,fila3,fila4,fila5]
    const [mapa,setMap] =useState(tabuleiro)
    const [x,setX] =useState(0)
    const [y,setY] =useState(5)
    function jogar(){
        const novoMapa = [...mapa];
        novoMapa[0][5] = 'jogador';
        setMap(novoMapa);
        alert(mapa[0][5])
    }
    function cima(){
        const novoMapa = [...mapa];
        if(x-1>=0 && novoMapa[x-1][y]=='historia'){
            navigate("/Trajetoria")
        }else if(x-1>=0 && novoMapa[x-1][y]=='contatos'){
            navigate("/Tela2")
        }
        else if( x-1>=0 && novoMapa[x-1][y]=='bloco'){
            novoMapa[x][y]='bloco'
            novoMapa[x-1][y]='jogador'
            setX(x-1)
            setMap(novoMapa);
            
        
        }
    }
    function esquerda(){
        const novoMapa = [...mapa];
        if( y-1>=0 && novoMapa[x][y-1]=='bloco'){
            novoMapa[x][y]='bloco'
            novoMapa[x][y-1]='jogador'
            setY(y-1)
            setMap(novoMapa);
            
        
        }
    }
    function direita(){
        const novoMapa = [...mapa];
        if(y+1<=9 && novoMapa[x][y+1]=='curriculo'){
            navigate("/Curriculo")
        }else if(y+1<=9 && novoMapa[x][y+1]=='habilidades'){
            navigate("/Habilidades")
        }
        else if( y+1<=9 && novoMapa[x][y+1]=='bloco'){
            novoMapa[x][y]='bloco'
            novoMapa[x][y+1]='jogador'
            setY(y+1)
            setMap(novoMapa);
        }
    }
    function baixo(){
        const novoMapa = [...mapa];
        if(x+1<=4 && novoMapa[x+1][y]=='driven'){
            navigate("/Driven")
        }else if( x+1<=4 && novoMapa[x+1][y]=='bloco'){
            novoMapa[x][y]='bloco'
            novoMapa[x+1][y]='jogador'
            setX(x+1)
            setMap(novoMapa);
        
        }
    }
return( <> 
    <div className="body">
    <div className='legenda'>
        <div className='leg'>
        <div className='orange'></div> <p>trajetória de vida</p> 
        </div>
        <div className='leg'> 
            <div className='red'></div> <p>contato</p>
        </div>
        <div className='leg'>
            <div className='pink'></div> <p>driven</p> 
        </div>
        <div className='leg'>
           <div className='green'></div> <p>habilidades</p> 
        </div>
        <div className='leg'>
            <div className='blueviolet'></div><p>currículo</p>
        </div>
        
    </div>
        <div className='texto'>
            <h3>Daniel Moura</h3>
        </div>
        <img className='daniel' src='data:image/jpeg;base64,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'></img>
        <div className="mapa">
            
            <div className={mapa[0][0]}></div>
            <div className={mapa[0][1]}></div>
            <div className={mapa[0][2]}></div>
            <div className={mapa[0][3]}></div>
            <div className={mapa[0][4]}></div>
            <div className={mapa[0][5]}></div>
            <div className={mapa[0][6]}></div>
            <div className={mapa[0][7]}></div>
            <div className={mapa[0][8]}></div>
            <div className={mapa[0][9]}></div>

            <div className={mapa[1][0]}></div>
            <div className={mapa[1][1]}></div>
            <div className={mapa[1][2]}></div>
            <div className={mapa[1][3]}></div>
            <div className={mapa[1][4]}></div>
            <div className={mapa[1][5]}></div>
            <div className={mapa[1][6]}></div>
            <div className={mapa[1][7]}></div>
            <div className={mapa[1][8]}></div>
            <div className={mapa[1][9]}></div>

            <div className={mapa[2][0]}></div>
            <div className={mapa[2][1]}></div>
            <div className={mapa[2][2]}></div>
            <div className={mapa[2][3]}></div>
            <div className={mapa[2][4]}></div>
            <div className={mapa[2][5]}></div>
            <div className={mapa[2][6]}></div>
            <div className={mapa[2][7]}></div>
            <div className={mapa[2][8]}></div>
            <div className={mapa[2][9]}></div>

            <div className={mapa[3][0]}></div>
            <div className={mapa[3][1]}></div>
            <div className={mapa[3][2]}></div>
            <div className={mapa[3][3]}></div>
            <div className={mapa[3][4]}></div>
            <div className={mapa[3][5]}></div>
            <div className={mapa[3][6]}></div>
            <div className={mapa[3][7]}></div>
            <div className={mapa[3][8]}></div>
            <div className={mapa[3][9]}></div>

            <div className={mapa[4][0]}></div>
            <div className={mapa[4][1]}></div>
            <div className={mapa[4][2]}></div>
            <div className={mapa[4][3]}></div>
            <div className={mapa[4][4]}></div>
            <div className={mapa[4][5]}></div>
            <div className={mapa[4][6]}></div>
            <div className={mapa[4][7]}></div>
            <div className={mapa[4][8]}></div>
            <div className={mapa[4][9]}></div>
           

        </div>
        
        <div className='caixasSetas'> 
            <button onClick={cima} className='botaocima'>
            <ion-icon name="arrow-up-sharp"></ion-icon>
            </button>
            <button onClick={direita} className='botaodireita'><ion-icon name="arrow-forward-sharp"></ion-icon></button>
            <button onClick={esquerda} className='botaoesquerda'><ion-icon name="arrow-back-sharp"></ion-icon></button>
            <button onClick={baixo} className='botaobaixo'><ion-icon name="arrow-down-sharp"></ion-icon></button>
        </div>
    </div>  
   
</>)
}