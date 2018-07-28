import { Component, OnInit,ElementRef,ViewChild,Output,EventEmitter} from '@angular/core';
import{Ingredient} from '../../shared/ingredient.model';
import {ShoppinglistService} from '../shopping-list.service'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name :ElementRef;
  @ViewChild('amountInput') amount :ElementRef;
  constructor(private slService:ShoppinglistService) { }

  ngOnInit() {
  }
  onAddItem(){
    const ingName = this.name.nativeElement.value;
    const ingAmount = this.amount.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingAmount);
    this.slService.addIngredient(newIngredient);
  }
}
