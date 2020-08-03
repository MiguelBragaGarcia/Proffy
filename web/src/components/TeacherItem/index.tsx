import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/52131821?s=460&u=1c87b1763d932fcfc0fa0ce97aad157244a08bd4&v=4"
          alt="imagem de perfil"
        />

        <div>
          <strong>Miguel Braga Garcia</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Aliquam ut ante nec augue euismod tincidunt et efficitur justo.
        <br />
        <br />
        Cras sed iaculis mauris. Pellentesque dignissim semper justo a dictum.
        Phasellus egestas magna augue, non facilisis nisl consectetur non.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
