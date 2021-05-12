import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  valueitem: any = null;
  navigationextras: NavigationExtras = {
    state: {
      value: null
    }
  };
  constructor(private router: Router) { 
    const navigation =this.router.getCurrentNavigation();
    this.valueitem = navigation?.extras?.state;
  }

  ngOnInit(): void {
  }
  onGoToEdit(item: any): void{
    this.navigationextras.state = item;
    this.router.navigate(['productcreate'], this.navigationextras);
  }
  onGoToCreate(): void{
    this.router.navigate(['productcreate']);
  }
  onGoToDelete(item: any): void{
    this.navigationextras.state = item;
   alert('has been deleted succesfull'+ this.navigationextras);
  }
  onGoToBack(): void{
  this.router.navigate(['productlist']);
  }

}
