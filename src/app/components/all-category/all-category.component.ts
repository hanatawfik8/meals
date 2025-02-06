import { Component, OnDestroy, OnInit } from '@angular/core';
import { AllCategoryService } from '../../services/allCategory/all-category.service';
import { DisplayAll } from '../../interfaces/display-all';

@Component({
  selector: 'app-all-category',
  imports: [],
  templateUrl: './all-category.component.html',
  styleUrl: './all-category.component.scss'
})
export class AllCategoryComponent implements OnInit, OnDestroy {
  constructor(private _allCategoryService: AllCategoryService) { }
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
        console.log(this.displayAll);
      },
      error: (err) => {
        console.log(err);

      }
    })
  }


}
