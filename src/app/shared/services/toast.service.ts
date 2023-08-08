import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private messageService: MessageService) {}

  showError(code: string, message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error ' + code,
      detail: message,
    });
  }
}
