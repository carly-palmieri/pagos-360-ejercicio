import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}
  isLoggedIn$ = this.authService.isLoggedIn$;

  ngOnInit(): void {}

  confirmLogout(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Estás seguro de que deseas cerrar sesión?',
      acceptLabel: 'Si',
      rejectLabel: 'No',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.authService.logOut();
        this.messageService.add({
          severity: 'success',
          summary: 'Listo!',
          detail: 'Se cerró la sesión correctamente',
        });
      },
      reject: () => {},
    });
  }
}
