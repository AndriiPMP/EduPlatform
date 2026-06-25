import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProtectedRoute() {
  const [loading, setLoading] = useState(true);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    async function checkAuth() {
        const accessToken = localStorage.getItem("access_token");

        try {
        if (accessToken) {
          axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
          setOk(true);
        } else {
          const res = await axios.post(
            "http://localhost:8000/token/refresh/",
            {},
            { withCredentials: true }
          );
          localStorage.setItem("access_token", res.data.access);
          axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.access}`;
          setOk(true);
        }
      } catch {
        localStorage.removeItem("access_token");
        setOk(false);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  if (loading) return null;
  if (!ok) return <Navigate to="/login" replace />;

  return <Outlet />;
}

export default ProtectedRoute