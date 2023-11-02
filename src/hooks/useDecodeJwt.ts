import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";

interface JwtDecoded {
  email: string;
  id: string;
}

export const useDecodeJwt = () => {
  const [token, setToken] = useState<string | null>(null);
  const [decoded, setDecoded] = useState<JwtDecoded | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      const decoded: JwtDecoded = jwtDecode(token);
      setDecoded(decoded);
    }
  }, []);

  return { decoded, token };
};
