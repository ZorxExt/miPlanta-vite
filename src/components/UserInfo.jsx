import "../styles/UserInfo.css";
export function UserInfo({ user }) {
  return (
    <section className="user-info_section">
      <h2>Panel de Usuario</h2>
      <div className="user-pic">
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocInlKB8KOSYOAIBRurZNgnXv7F_vf0vI-4KV5m8QbXYlD3iRH2M=s96-c"
          alt=""
        />
      </div>
      <h3>
        Hola <b>{user.name}</b>!
      </h3>
      <div className="user-status">
        <h3>EN PROCESO NASIII</h3>
      </div>
    </section>
  );
}
