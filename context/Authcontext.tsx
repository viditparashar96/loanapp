import * as SecureStore from "expo-secure-store";
import { createContext, useContext, useEffect, useState } from "react";
interface AuthProps {
  authStatus: {
    token: string | null;
    authenitcated: boolean | null;
  };
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
}

const AuthContext = createContext<AuthProps | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: any) => {
  const [authStatus, setAuthStatus] = useState<any>({
    token: null,
    authenitcated: null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadToken = async () => {
      const token = await SecureStore.getItemAsync("token");
      console.log("securedToken:", token);
      if (token) {
        setAuthStatus({
          token,
          authenitcated: true,
        });
      }
      setLoading(false);
    };
    loadToken();
  }, []);

  const onLogin = async (email: string, password: string) => {
    try {
      setAuthStatus({
        token: "1234",
        authenitcated: true,
      });

      await SecureStore.setItemAsync("token", "1234");
      return true;
    } catch (error) {
      console.log(error);
    }
  };

  const onLogout = async () => {
    try {
      await SecureStore.deleteItemAsync("token");
      setAuthStatus({
        token: null,
        authenitcated: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ authStatus, onLogin, onLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
