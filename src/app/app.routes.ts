import { Routes } from '@angular/router';
import { DisplayCategoryComponent } from './components/display-category/display-category.component';
import { AllCategoryComponent } from './components/all-category/all-category.component';
import { RecipeComponent } from './components/recipe/recipe.component';

export const routes: Routes = [
    { path: "", redirectTo: "All", pathMatch: "full" },
    { path: "All", component: AllCategoryComponent },
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
    { path: "Recipe", component: RecipeComponent }


];
