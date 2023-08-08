import { Component, Input, OnInit } from '@angular/core';
import { Collections } from 'src/app/shared/interfaces/ICollections';

@Component({
  selector: 'app-collections-table',
  templateUrl: './collections-table.component.html',
  styleUrls: ['./collections-table.component.scss'],
})
export class CollectionsTableComponent implements OnInit {
  @Input() collections: Collections[] = [];
  @Input() loading: boolean = false;
  @Input() noResults: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
