import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guess';
  loadedFeature = 'recipe'
  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}
