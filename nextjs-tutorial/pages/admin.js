import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

const Admin = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = () => {
    axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
        // login
        setIsLogin(true);
      } else {
        // not login
        router.push("/login");
      }
    });
  };

  const logout = () => {
    axios.get("/api/logout").then((res) => {
      if (res.status === 200) {
        router.push("/");
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return <>admin{isLogin && <Button onClick={logout}>Logout</Button>}</>;
};

export default Admin;
