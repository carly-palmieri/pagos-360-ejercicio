import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLogged = false;
  constructor(private authService: AuthService) {}
  isLoggedIn$ = this.authService.isLoggedIn$;
  ngOnInit() {}
}
