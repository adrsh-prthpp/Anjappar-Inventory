import { Component } from '@angular/core';
import { Inventory } from '../models/inventory';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent {

  newItemName : string = ""
  newVendor : string = ""

   items: Inventory [] = []

   addItem(){
    if(this.newItemName.trim().length && this.newVendor.trim().length){
      let newItem : Inventory = {
        itemName: this.newItemName,
        vendor: this.newVendor
      }

      this.items.push(newItem)

      this.newItemName = "",
      this.newVendor = ""
    }
   }

   removeItem(index : number){
    this.items.splice(index, 1)
    }

}
