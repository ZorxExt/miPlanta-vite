import "../styles/Login.css"
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
export function Login({ setUser }) {
  return (
    <section className="login_section">
      <h2>Panel de Usuario</h2>
      <GoogleLogin
        text="signin_with"
        onSuccess={(credentialResponse) => {
          if (credentialResponse.credential) {
            setUser(jwtDecode(credentialResponse.credential));
          }
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </section>
  );
}
