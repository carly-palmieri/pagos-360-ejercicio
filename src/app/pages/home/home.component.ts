import { CollectionsService } from './../../services/collections.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  collectionsReport: any
  constructor(private collectionsService: CollectionsService) { }

  ngOnInit(): void {
  }

  getCollections(date: Date) {
    if(date ){
    let dateFormated = this.formatDateToDDMMYYYY(date)
    this.collectionsService.getCollectionByDate(dateFormated).subscribe(res => {
      this.collectionsReport = res
    })}
  }

   formatDateToDDMMYYYY(inputDate: Date): string {
    const day = inputDate.getDate().toString().padStart(2, '0');
    const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
    const year = inputDate.getFullYear();
    return `${day}-${month}-${year}`;
  }

}
