import { CollectionsReport } from 'src/app/shared/interfaces/ICollections';
import { CollectionsService } from '../../shared/services/collections.service';
import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../shared/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  collectionsReport: CollectionsReport | undefined;
  loadingCollections = false;
  collectionsEmpty = false;

  constructor(
    private collectionsService: CollectionsService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {}

  getCollections(date: Date) {
    if (date) {
      this.loadingCollections = true;
      let dateFormated = this.formatDateToDDMMYYYY(date);
      this.collectionsService.getCollectionByDate(dateFormated).subscribe({
        next: (res: CollectionsReport) => {
          this.collectionsReport = res;
          if (this.collectionsReport.data.length === 0) {
            this.collectionsEmpty = true;
          } else {
            this.collectionsEmpty = false;
          }
          this.loadingCollections = false;
        },
        error: (res) => {
          this.loadingCollections = false;
          this.collectionsEmpty = false;
          this.collectionsReport = undefined;
          this.toastService.showError(res.status, res.error.error_description);
        },
      });
    }
  }

  formatDateToDDMMYYYY(inputDate: Date): string {
    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const year = inputDate.getFullYear();
    return `${day}-${month}-${year}`;
  }
}
