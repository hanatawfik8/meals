import { Routes } from '@angular/router';
import { DisplayCategoryComponent } from './components/display-category/display-category.component';

export const routes: Routes = [
    { path: "", redirectTo: "Beef", pathMatch: "full" },
    // { path: "", redirectTo: "All", pathMatch: "full" },
    { path: "Beef", component: DisplayCategoryComponent },
    { path: "Breakfast", component: DisplayCategoryComponent },
    { path: "Chicken", component: DisplayCategoryComponent },
    { path: "Dessert", component: DisplayCategoryComponent },
    { path: "Goat", component: DisplayCategoryComponent },
    { path: "Lamb", component: DisplayCategoryComponent },
    { path: "Miscellaneous", component: DisplayCategoryComponent },
    { path: "Pasta", component: DisplayCategoryComponent },
    { path: "Seafood", component: DisplayCategoryComponent },
    { path: "Side", component: DisplayCategoryComponent },
    { path: "Starter", component: DisplayCategoryComponent },
    { path: "Vegan", component: DisplayCategoryComponent },
    { path: "Vegetarian", component: DisplayCategoryComponent },


];
