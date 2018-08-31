import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  itemSelected = 'Recipe';
  onNavigate(item: string) {
    this.itemSelected = item;
  }
}
