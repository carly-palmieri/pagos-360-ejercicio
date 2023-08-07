import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-collections-table',
  templateUrl: './collections-table.component.html',
  styleUrls: ['./collections-table.component.scss'],
})
export class CollectionsTableComponent implements OnInit {
  @Input() collections = [];
  constructor() {}

  ngOnInit(): void {}
}
