import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-collections-form',
  templateUrl: './collections-form.component.html',
  styleUrls: ['./collections-form.component.scss'],
})
export class CollectionsFormComponent implements OnInit {
  @Output() searchEvent = new EventEmitter();
  @Input() loading: boolean = false;
  date = new FormControl('', [Validators.required]);
  locale = 'es-AR';
  yesterdaysDate: Date;
  constructor() {
    this.yesterdaysDate = this.getYesterdayDate();
  }

  ngOnInit(): void {}

  emitSearch() {
    if (this.date.valid) {
      this.searchEvent.emit(this.date.value);
    }
  }

  getYesterdayDate(): Date {
    const today = new Date();
    const millisecondsInOneDay = 24 * 60 * 60 * 1000;
    const yesterday = new Date(today.getTime() - millisecondsInOneDay);
    return yesterday;
  }
}
