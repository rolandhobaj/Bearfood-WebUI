import { createContext, useEffect, useState, useContext } from "react";
import { UserProfile } from "../Authentication/UserProfile"
import { useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../Authentication/Service";

type UserContextType = {
    user: UserProfile | null;
    token: string | null;
    loginUser: (username: string, password: string, onError: () => void) => void;
    registerUser: (username: string, password: string, fullName : string, onError: () => void) => void;
    isLoggedIn: () => boolean;
}

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null); 
    const [user, setUser] = useState<UserProfile | null>(null);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (user && token){
            setUser(JSON.parse(user));
            setToken(token);
        }
    }, [])

    const loginUser = async (username: string, password: string, onError: () => void) => {
        await loginAPI(username, password, onError)
          .then((userDto) => {
            if (userDto) {
              localStorage.setItem("token", userDto.token);
              const userObj = {
                userName: userDto.userName,
                fullName: userDto.fullName,
              };
              localStorage.setItem("user", JSON.stringify(userObj));
              setToken(userDto.token!);
              setUser(userObj!);
              navigate("/dashboard");
            }
          })
          .catch((e) => console.log("warning"));
      };

      const registerUser = async (username: string, password: string, fullName : string, onError: () => void) => {
        await registerAPI(username, password, fullName, onError)
        .then((isSuccesfull) => {
          if (isSuccesfull){
            navigate("/");
          }
        });
      }

      const isLoggedIn = () => user !== null;
    
      return (
        <UserContext.Provider
          value={{ loginUser, registerUser, user, token, isLoggedIn}}
        >
          {children}
        </UserContext.Provider>
      );
};

export const useAuth = () => useContext(UserContext);