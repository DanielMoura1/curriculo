import { useNavigate } from "react-router-dom";
export default function Trajetoria(){
    const navigate = useNavigate();
    function voltar(){
        navigate("/")
    }
    return( <> 
        <div className='bodyl'>
            <h1>trajetória de vida</h1>
            <div className="trajTextoPagina">
            <p>Minha jornada na programação teve início durante a faculdade, quando fui apresentado à disciplina de Introdução ao Processamento de Dados (IPD), onde tive meu primeiro contato com a linguagem Python. Contudo, mal tive tempo de mergulhar nesse mundo novo, pois uma semana após o início das aulas, a pandemia nos forçou a um isolamento repentino e a faculdade fechou suas portas, interrompendo abruptamente nossa rotina acadêmica. Somente no final de 2020, as aulas online foram retomadas, mas isso não me impediu de buscar conhecimento por conta própria, principalmente na área que mais me encantou: Python.

                Ao explorar a linguagem, fui conquistando pequenas vitórias por meio de projetos pessoais que me desafiavam a aprofundar meus conhecimentos. Porém, essa busca incessante por aprendizado logo me levou a questionar os limites da programação. Decidi então ampliar meus horizontes e me aventurar em outras linguagens e paradigmas.

                Foi assim que, ao ingressar no Grupo de Foguetes do Rio de Janeiro (GFRJ), um estimulante grupo estudantil na Universidade do Estado do Rio de Janeiro (UERJ), fui exposto ao universo da aviónica e aos desafios de programar os arduínos embarcados nos foguetes, utilizando a linguagem C++, Para para passar no processo seletivo do GFRJ, decidi criar um jogo na Unity utilizando C# como forma de demonstrar meu comprometimento e habilidades.</p>
            </div>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/whROOdWCsI4" frameborder="0" allowfullscreen></iframe>
            <button onClick={()=>navigate("/Trajetoria")}>voltar</button>
           <div className="trajTextoPagina">
            <p>A paixão pela programação floresceu de tal maneira que senti a necessidade de redirecionar minha trajetória. Decidi, então, interromper temporariamente meus estudos universitários e me dedicar integralmente a cursos que me permitissem mergulhar ainda mais fundo nesse fascinante mundo. Minha escolha foi a Driven, onde participei de um abrangente curso Full Stack de Desenvolvimento Web.

Durante esse percurso na Driven, tive a valiosa oportunidade de aprender linguagens essenciais, como JavaScript e TypeScript, e explorei o poder das bibliotecas React para o desenvolvimento front-end, bem como ferramentas vitais como Prisma e MongoDB para o desenvolvimento back-end. Essa experiência só fortaleceu meu amor pelo desenvolvimento, com o back-end se tornando meu ponto de destaque e interesse.

Hoje, após uma jornada de dedicação e empenho, encontro-me enraizado no campo do desenvolvimento web, sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades e contribuir para projetos empolgantes. Estou determinado a continuar aprendendo, evoluindo e construindo um percurso sólido e gratificante nesse universo dinâmico e em constante expansão da programação e do desenvolvimento web.</p>
           </div>

        </div>
        
    </>)
    }
    