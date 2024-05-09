import { defineStore } from 'pinia'

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [],
    selectedRecipe: null,
    showModal: false // 初始默認不跳窗
  }),
  actions: {
    setRecipes(recipes) {
      this.recipes = recipes
    },
    selectRecipe(recipe) {
      this.selectedRecipe = recipe
      this.showModal = true // 點選食譜顯示跳窗窗口
    },
    closeRecipeModal() {
      this.showModal = false // 隱藏跳窗窗口
    },
    addRecipe(newRecipe) {
      newRecipe.ingredients = newRecipe.ingredients.split(',').map((item) => item.trim())
      this.recipes.push(newRecipe)
    }
  }
})
