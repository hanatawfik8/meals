import { Component, OnDestroy, OnInit } from '@angular/core';
import { AllCategoryService } from '../../services/allCategory/all-category.service';
import { DisplayAll } from '../../interfaces/display-all';
import { GetRecipeService } from '../../services/getRecipe/get-recipe.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-category',
  imports: [RouterLink],
  templateUrl: './all-category.component.html',
  styleUrl: './all-category.component.scss'
})
export class AllCategoryComponent implements OnInit, OnDestroy {
  constructor(
    private _allCategoryService: AllCategoryService,
    private _getRecipeService: GetRecipeService
  ) { }
  callingAPI: any;
  displayAll!: DisplayAll[];

  ngOnInit(): void {
    this.getAllCategory()
  }

  ngOnDestroy(): void {
    this.callingAPI.unsubscribe()
  }

  getAllCategory() {
    this.callingAPI = this._allCategoryService.getAllCategory().subscribe({
      next: (res) => {
        this.displayAll = res.meals
      },
      error: (err) => {
        console.log(err);

      }
    })
  }

  sendID(id: string) {
    this._getRecipeService.sentID = id;
  }


}
