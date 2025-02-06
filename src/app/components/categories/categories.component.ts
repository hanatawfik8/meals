import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories/categories.service';
import { ICategories } from '../../interfaces/icategories';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DisplayCategoryService } from '../../services/displayCategory/display-category.service';

@Component({
  selector: 'app-categories',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit, OnDestroy {
  constructor(
    private _categoriesService: CategoriesService,
    private _displayCategoryService: DisplayCategoryService
  ) { }
  callingAPI: any;
  callSpecificAPI: any;
  allCategories!: ICategories[];

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.callingAPI.unsubscribe()
  }

  getCategories() {
    this.callingAPI = this._categoriesService.getCategories().subscribe({
      next: (res) => {
        this.allCategories = res.meals;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  sendCategory(sent: string) {
    this._displayCategoryService.sentCategory = sent
  }
}
