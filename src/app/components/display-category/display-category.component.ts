import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { DisplayCategoryService } from '../../services/displayCategory/display-category.service';
import { ICategoryFood } from '../../interfaces/icategory-food';
import { GetRecipeService } from '../../services/getRecipe/get-recipe.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-display-category',
  imports: [RouterLink],
  templateUrl: './display-category.component.html',
  styleUrl: './display-category.component.scss'
})
export class DisplayCategoryComponent implements OnInit, OnDestroy {
  displayedFood!: ICategoryFood[]
  callSpecificAPI: any

  constructor(
    private _displayCategoryService: DisplayCategoryService,
    private _getRecipeService: GetRecipeService
  ) { }

  ngOnInit(): void {
    this.callSpecificAPI = this._displayCategoryService.getSpecificCategory(this._displayCategoryService.sentCategory).subscribe({
      next: (res) => {
        this.displayedFood = res.meals
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  ngOnDestroy(): void {
    this.callSpecificAPI.unsubscribe()
  }

  sendID(id: string) {
    this._getRecipeService.sentID = id;
  }

}
