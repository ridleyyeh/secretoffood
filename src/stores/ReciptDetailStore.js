// src/stores/recipeStore.js
import { defineStore } from 'pinia'

export const useRecipeStore = defineStore('recipeStore', {
  state: () => ({
    recipes: [],
    selectedRecipe: null,
    showModal: false
  }),
  actions: {
    addRecipe(recipe) {
      this.recipes.push(recipe)
    },
    selectRecipe(recipe) {
      this.selectedRecipe = recipe
      this.showModal = true
    },
    closeRecipeModal() {
      this.showModal = false
    }
  }
})
