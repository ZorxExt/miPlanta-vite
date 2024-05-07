import { Link } from "react-router-dom";
import "../styles/MainPage.css";


export function MainPage() {

  return (
    <>
      <article className="main_page">
        <div className="start_1">
          <h2>
            Sumate al <b>REPROCANN</b>
            <br />
            <small>con nuestro asesoriamiento</small>
          </h2>
          <h4>
            Somos una red de profesionales actualizados con los procedimientos
            médicos más avanzados y las regulaciones más recientes.
          </h4>
          <div className="links">
            <button  className="btn_start1">
              <img src="/flecha.png" alt="" />
              Comenza Ya!
            </button>
            <Link to={"faq"} className="btn_servicio">
              +Info
            </Link>
          </div>
        </div>

        <article className="codigo-vinculacion">
          <h2>Vamos a necesitar tu codigo de vinculación</h2>
          <div className="links-vinculacion">
            <a href="https://forms.gle/TmGMkZng6N9M8fbt5" className="btn_start2">
              <img src="/flecha.png" alt="" />
              YA LO TENGO!
            </a>
            <button className="btn_servicio">
              <img src="/faq.png" alt=""></img>QUE ES ESO?
            </button>
          </div>
        </article>
        <article className="codigo-vinculacion-about">
          <h2>
            Es un codigo proporcionado por el Ministerio de Salud necesario para
            el personal medico
          </h2>
          <h3>
            Se puede conseguir accediendo a la pagina <a target="_blank" href="https://reprocann.msal.gob.ar/">REPROCANN</a>
            con la cuenta miArgentina en menos de 5 minutos!
          </h3>
          <div className="links">
            <a href="https://forms.gle/TmGMkZng6N9M8fbt5" className="btn_start1">
              <img src="img/flecha.png" alt="" />
              YA LO TENGO!
            </a>
            <a
              target="_blank"
              href="./FILES/TutorialCDV.pdf"
              className="btn_servicio"
            >
              Tutorial
            </a>
          </div>
        </article>

        <img src="/landing.png" alt="" />
      </article>

      <article className="servicio-container">
        <section>
          <figure>
            <img src="/chala.png" alt="" />
          </figure>
          <div>
            <p>
              Si sos paciente, autocultivador, ONG vinculada a la salud o
              profesional de la salud: tenés el derecho a solicitar la
              inscripción al REPROCANN
            </p>
          </div>
        </section>
        <section>
          <figure>
            <img src="/clip.png" alt="" />
          </figure>
          <div>
            <p>
              Te orientamos en todo el proceso de inscripción con los requisitos
              legales, la consulta médica y los pasos a seguir para que puedas
              realizar la inscripción al REPROCANN sin problemas.
            </p>
          </div>
        </section>
        <section>
          <figure>
            <img src="/check.png" alt="" />
          </figure>
          <div>
            <p>
              Te avisaremos cuando tengas aprobada la inscripción al REPROCANN
              para que puedas estar tranquilo vos y tu familia, también te
              mantendremos actualizado con nuestro newsletter y alertas.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
