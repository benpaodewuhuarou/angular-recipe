import { Component, OnInit,Output,EventEmitter,ViewChild} from '@angular/core';
import{Ingredient} from '../../shared/ingredient.model';
import {ShoppinglistService} from '../shopping-list.service'
import { NgForm } from '@angular/forms';
import {Subscription}from 'rxjs'
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
@Component({

  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy{
  @ViewChild('f') form :NgForm;
  subscription:Subscription;
  constructor(private slService:ShoppinglistService) { };
  editMode = false;
  editedItemIndex :number;

  ngOnInit() {
    this.subscription=this.slService.startedEditing.subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editedItemIndex = index;
        this.form.setValue({
          'name':this.slService.getIngredient(index).name,
          'amount':this.slService.getIngredient(index).amount
        })
      }
    )
  }
  onAddItem(form:NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex,newIngredient);
      this.form.reset();
      this.editMode =false;
    }else{
      this.slService.addIngredient(newIngredient);
    }
  }
  onClear(){
    this.form.reset();
    this.editMode =false;
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onDelete(){
    this.onClear();
    this.slService.deleteIngredient(this.editedItemIndex);
  }
}
