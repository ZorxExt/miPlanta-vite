import "../styles/Nosotros.css"

export function Nosotros() {
  return (
    <div className="main_page-nosotros">
      <div className="card">
        <img src="/admin.png" alt="" className="foto-perfil" />
        <div className="card-data">
          <h2 className="nombre">Dr. Sabaté Joaquín</h2>
          <h4 className="matricula">CPACF T 144 F 638</h4>
          <h3 className="rol">Coordinador Legal</h3>
          <p className="text"></p>
          <h5 className="mail">jsabatecastillo@miplanta.com.ar</h5>
        </div>
      </div>

      <div className="card">
        <img src="/admin.png" alt="" className="foto-perfil" />
        <div className="card-data">
          <h2 className="nombre">Dr. Araujo Joaquín</h2>
          <h4 className="matricula">MP 121251252125</h4>
          <h3 className="rol" id="rol-medico">
            Coordinador Medico
          </h3>
          <p className="text"></p>
          <h5 className="mail">jaraujo@miplanta.com.ar</h5>
        </div>
      </div>
    </div>
  );
}
