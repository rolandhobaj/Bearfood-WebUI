import { UserDto } from "./UserProfile";

export const loginAPI = async (username: string, password: string, onError: () => void) => {
  try {
    const data = await fetch('http://localhost:5025/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password }),
      });    
      
    if (data.status !== 200){
        onError();
        return;
    }
    const responseBody = await data.text();
    return JSON.parse(responseBody) as UserDto;
  } catch (error) {
    console.log(error);
    onError();
  }
};

export const registerAPI = async (username: string, password : string, fullName : string, onError: () => void) => {
  try{
    var data = await fetch('http://localhost:5025/api/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: username, password: password, fullName: fullName }),
    })

    if (data.status !== 200){
      onError();
      return false;
    }

    return true;
  } catch(error){
    console.log(error);
    onError();
    return false;
  }
}