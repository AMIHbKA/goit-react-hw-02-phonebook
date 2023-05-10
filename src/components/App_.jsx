import { Component } from 'react';
import { RecipeForm } from './RecipeForm/RecipeForm';
import initialRecipes from './RecipeForm/recipes.json';

export class App extends Component {
  state = {
    recipes: initialRecipes,
  };

  addRecipe = newRecipe => {
    this.setState(prevState => {
      return {
        recipes: [...prevState.recipes, newRecipe],
      };
    });
  };

  deleteRecipe = recipeId => {
    this.setState(prevState => {
      return {
        recipes: prevState.recipes.filter(recipe => recipe.id != recipeId),
      };
    });
  };
  render() {
    return (
      <>
        <RecipeForm onSubmit={this.addRecipe} />
      </>
    );
  }
}
