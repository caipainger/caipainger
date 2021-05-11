import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
navigationextras: NavigationExtras = {
  state: {
    value: null
  }
};
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 
  onGoToDetails(item: any): void{
    this.navigationextras.state = item;
    this.router.navigate(['productdetails'], this.navigationextras);
  }
   
}
