import { Component } from '@angular/core';
import { Model, Items } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
   model = new Model();
   isDisplay = false;
    
   getName()
   {
     return this.model.user;
   }

   getItems()
   {
     if(this.isDisplay)
     {
      return this.model.item;
     }
     return this.model.item.filter(item => !item.action)
   }
   add(value)
   {
     this.model.item.push(new Items(value,false))
   }
}
