import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router} from '@angular/router';
import { UsersService } from '../_services/users.service';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  
  model: any = {};
  isExpanded = false;

  constructor(private authService : AuthService, private alertify : AlertifyService, 
    private router: Router,
    private usersService: UsersService)
  {
    
  }

  ngOnInit()
  {

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  login()
  {
    this.authService.login(this.model).subscribe(next => {
     this.alertify.success('Logged in successfully');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/']);
        });
  }
  loggedIn() {
     return this.authService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message("User logged out");
    this.router.navigate(['/']);
  }
}
