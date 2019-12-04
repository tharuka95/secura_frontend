import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'secura-nav-bar-component',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.scss']
})
export class NavBarComponentComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


  logOut(){
    sessionStorage.removeItem('sessionUrl');
    sessionStorage.removeItem('sessionUsername');
    sessionStorage.setItem('loginStatus', '0');
    this.router.navigate(['']);
    // this.toastr.success('Logged Out Successfully');
    console.log("Logged Out Successfully");
    this.ngOnInit();
  }
}
