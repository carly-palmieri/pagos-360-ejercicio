import { Component, Input } from '@angular/core';
import { CollectionsReport } from 'src/app/shared/interfaces/ICollections';

@Component({
  selector: 'app-collections-summary',
  templateUrl: './collections-summary.component.html',
  styleUrls: ['./collections-summary.component.scss'],
})
export class CollectionsSummaryComponent {
  @Input() collectionsReport: CollectionsReport | undefined;
}
