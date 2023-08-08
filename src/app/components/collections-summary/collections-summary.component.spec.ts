import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsSummaryComponent } from './collections-summary.component';

describe('CollectionsSummaryComponent', () => {
  let component: CollectionsSummaryComponent;
  let fixture: ComponentFixture<CollectionsSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionsSummaryComponent]
    });
    fixture = TestBed.createComponent(CollectionsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
