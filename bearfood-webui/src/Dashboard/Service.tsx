import { RecipeDto } from "./Recipe";

export const getAllRecipe = async (onError: () => void) => {
    try{
      var data = await fetch('http://localhost:5025/api/Recipe', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
  
      if (data.status !== 200){
        onError();
        return [];
      }
  
      const responseBody = await data.text();
      console.log(responseBody);
      return JSON.parse(responseBody) as RecipeDto[];
    } catch(error){
      console.log(error);
      onError();
      return [];
    }
  }