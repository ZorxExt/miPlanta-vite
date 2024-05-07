import "../styles/Comunidad.css"
export function Comunidad(){
    return(
        <div className="main_page-comunidad">
        <div className="start_container">
          <div className="start-text-container">
            <h2>
              Seguí nuestro <b>BLOG</b><br />
              <small>con todas las novedades del sector</small>
            </h2>
          </div>
          <img className="start-image-big start-image" src="./clip.png" alt="" />
        </div>
        <div className="articles-container">
          <a href="./hidroponia.html">
            <div className="article">
              <div className="article-img"></div>
              <h3 className="article-title">
                Hidroponía <br />
                Una Forma Innovadora de Cultivar <b>miPlanta</b>
              </h3>
              <p>
                El método de cultivo sin suelo. Debido a su eficiencia y
                ventajas en comparación con el cultivo tradicional en tierra...
              </p>
            </div>
          </a>
        </div>
      </div>
    )
}