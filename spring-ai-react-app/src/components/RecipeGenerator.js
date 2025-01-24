import React, { useState } from "react";

function RecipeGenerator(){
    const [ingredients, setIngredients] = useState('');
    const [cuisine, setCuisine] = useState('any');
    const [dietaryResctrictions, setDietaryResctrictions] = useState('');
    const [recipe, setRecipe] = useState('');


    const createRecipe = async() =>{

        try{
            const response = await fetch(`http://backend:8080/recipe-creator?ingredients=${ingredients}&cuisine=${cuisine}&dietaryRestrictions=${dietaryResctrictions}`);
            const data = await response.text();

            console.log(data);

            setRecipe(data);
        }
        catch (error){
            console.error("Error creating recipe : ", error);
            
        }

    }

    return (
        <div>
            <h2>Generate Recipe</h2>
            <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)}
            placeholder="Enter ingredients (comma separated)"/>

            <input type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)}
            placeholder="Enter cuisine"/>

            <input type="text" value={dietaryResctrictions} onChange={(e) => setDietaryResctrictions(e.target.value)}
            placeholder="Enter dietary restrictions"/>

            <button onClick={createRecipe}>Create recipe</button>

            <div className="output">
                <pre className="recipe-text">
                    {recipe}
                </pre>
            </div>

        </div>
        
    );
}

export default RecipeGenerator;