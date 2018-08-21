import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'guess';
  loadedFeature = 'recipe'

 ngOnInit(){
   firebase.initializeApp({
    apiKey: "AIzaSyCWAFrNprzUmLoj-A6PAGQaiIKhG2JosTE",
    authDomain: "recipe-test-dde91.firebaseapp.com",
   })
 }
  onNavigate(feature:string){
    this.loadedFeature = feature;
  }
}
