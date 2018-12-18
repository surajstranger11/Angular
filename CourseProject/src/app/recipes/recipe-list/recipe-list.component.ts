import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[]= [
   new Recipe('A test Recipe','This is simply a test',
   'https://images.pexels.com/photos/247685/pexels-photo-247685.png?cs=srgb&dl=assorted-diet-edible-247685.jpg&fm=jpg')
 ];
  constructor() { }

  ngOnInit() {
  }

}
