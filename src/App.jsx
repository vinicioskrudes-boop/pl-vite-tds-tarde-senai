//import dos hooks do react
import { useState } from "react";
//import do css
import s from "./App.module.css";
//import dos componentes internos
import { Card } from "./components/card";
//import das imagens
import cardImg1 from "/img1.jpg";
import cardImg2 from "/img2.jpg";
import cardImg3 from "/img3.jpg";
import pic from "/pic.png";

function App() {
  const [nome, setNome] = useState("");
  const [assunto, setAssunto] = useState("");

  const enviar = () => {
    const mensagem = `Gostaria de entrar em contato! \n\nNome: ${nome} \nAssunto: ${assunto}`;
    const msg = encodeURIComponent(mensagem);
    window.open(`https://wa.me/5541999994084?text=${msg}`);
  };

  return (
    <>
      <nav>
        <a href="#s1">Primeira</a>
        <a href="#s2">Segunda</a>
        <a href="#s3">Terceira</a>
        <a href="#s4">Quarta</a>
      </nav>
      <main>
        <section id="s1" className={s.s1}>
          <div className={s.imgSide}>
            <img src={pic} alt="Perfil" />
          </div>
          <div className={s.textSide}>
            <h1>André Dias</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos,
              maxime nostrum sed animi quia doloremque ab quam, repellendus
              molestias quo reiciendis? Dolores, ut natus facilis aut nobis eius
              nostrum laboriosam.
            </p>
          </div>
        </section>
        <section id="s2" className={s.s2}>
          <Card
            imgSrc={cardImg1}
            alt="Card img 1"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit cupiditate explicabo quae natus ipsum alias consectetur."
            title="Card 1"
          />
          <Card
            imgSrc={cardImg2}
            alt="Card img 2"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit cupiditate explicabo quae natus ipsum alias consectetur."
            title="Card 2"
          />
          <Card
            imgSrc={cardImg3}
            alt="Card img 3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit cupiditate explicabo quae natus ipsum alias consectetur."
            title="Card 3"
          />
        </section>
        <section id="s3" className={s.s3}>
          <h2>teste</h2>
        </section>
        <section id="s4" className={s.s4}>
          <h2>Contato</h2>
          <div className={s.formulario}>
            <label htmlFor="nome">Nome</label>
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              type="text"
              id="nome"
              placeholder="Insira seu nome"
            />
            <label htmlFor="assunto">Mensagem</label>
            <textarea
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              id="assunto"
              placeholder="Insira sua mensagem"
            ></textarea>
            <button className={s.btn} onClick={enviar}>
              ENVIAR
            </button>
          </div>
        </section>
      </main>
      <footer>
        <a href="https://www.facebook.com" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/Andredev-dias" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
      </footer>
    </>
  );
}

export default App;
