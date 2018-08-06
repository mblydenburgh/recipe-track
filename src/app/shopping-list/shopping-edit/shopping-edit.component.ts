import { Component,
         OnInit,
         Output,
         EventEmitter,
         ElementRef,
         ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(){
    this.ingredientAdded.emit({
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value
    });
  }

}
