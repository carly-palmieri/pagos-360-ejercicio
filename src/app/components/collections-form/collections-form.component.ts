import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-collections-form',
  templateUrl: './collections-form.component.html',
  styleUrls: ['./collections-form.component.scss'],
})
export class CollectionsFormComponent implements OnInit {
  @Output() searchEvent = new EventEmitter();
  date = new FormControl('', [Validators.required]);
  locale = 'es-AR';
  todayDate = new Date();
  constructor() {}

  ngOnInit(): void {}

  emitSearch() {
    if (this.date.valid) {
      this.searchEvent.emit(this.date.value);
    }
  }
}
