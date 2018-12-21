import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[]= [
   new Recipe('Chilli Chicken Recipe','Home made chilli Chicken',
   'https://images.pexels.com/photos/247685/pexels-photo-247685.png?cs=srgb&dl=assorted-diet-edible-247685.jpg&fm=jpg'),
   new Recipe('Sweet Pulao','Bengali style Sweet Pulao',
   'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=burger-chips-dinner-70497.jpg&fm=jpg')
 ];
  constructor() { }

  ngOnInit() {
  }

}
