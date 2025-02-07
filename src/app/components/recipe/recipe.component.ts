import { Component, OnDestroy, OnInit } from '@angular/core';
import { GetRecipeService } from '../../services/getRecipe/get-recipe.service';
import { IRecipe } from '../../interfaces/irecipe';

@Component({
  selector: 'app-recipe',
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeComponent implements OnInit, OnDestroy {

  recipe!: IRecipe
  ingredients!: string[]
  amounts!: string[]
  values: any
  callingAPI: any

  constructor(private _getRecipeService: GetRecipeService) { }
  ngOnInit(): void {
    this.callingAPI = this._getRecipeService.getRecipe(this._getRecipeService.sentID).subscribe({
      next: (res) => {
        this.recipe = res.meals[0]
        this.values = Object.values(this.recipe);
        this.ingredients = []
        this.amounts = []
        for (let i = 9; i <= 28; i++) {
          if (this.values[i]) {
            this.ingredients.push(this.values[i])
          }
        }
        for (let i = 29; i <= 48; i++) {
          if (this.values[i] != " " && this.values[i]) {
            this.amounts.push(this.values[i])
          }
        }
        console.log(this.ingredients)
        console.log(this.amounts);

      }
    })
  }

  ngOnDestroy(): void {
    this.callingAPI.unsubscribe()
  }
}
