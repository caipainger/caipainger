import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Products } from './shared/models/products.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 

  constructor(private router: Router) { 
    
  }
  ngOnInit(): void {
    
    //this.router.navigate(['productlist']);
    
  }
}
