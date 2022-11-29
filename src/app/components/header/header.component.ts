import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() pageTitle : string;
  @Input() isNotHome : boolean;

  constructor(private authService:AuthService,
    private router:Router) { 
 }

  ngOnInit() {
  }
  
  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/',{replaceUrl:true})
  }


}
