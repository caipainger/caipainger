import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-productcreate',
  templateUrl: './productcreate.component.html',
  styleUrls: ['./productcreate.component.scss']
})
export class ProductcreateComponent implements OnInit {
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
  onSave(item: any): void{
    this.navigationextras.state = item;
    this.router.navigate(['productcreate'], this.navigationextras);
  }
  onCreate(): void{
    this.router.navigate(['productcreate']);
  }
  onGoToDelete(item: any): void{
    this.navigationextras.state = item;
   alert('has been deleted succesfull'+ this.navigationextras);
  }

}
