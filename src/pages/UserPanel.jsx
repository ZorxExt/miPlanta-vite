import { useState } from "react";
import "../styles/UserPanel.css";
import { Login } from "../components/Login";
import { UserInfo } from "../components/UserInfo";
import { GoogleOAuthProvider } from "@react-oauth/google";

export function UserPanel() {
  const [user, setUser] = useState(null);
  return (
    <GoogleOAuthProvider clientId="304939766758-sr5u1mged80gm8mrjtgq05hjq6hi0vco.apps.googleusercontent.com">
      <main className="main_page-user">
        {user === null && <Login setUser={setUser} />}
        {user && <UserInfo user={user} />}
      </main>
    </GoogleOAuthProvider>
  );
}
