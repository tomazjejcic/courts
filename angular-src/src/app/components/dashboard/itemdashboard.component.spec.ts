import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdashboardComponent } from './itemdashboard.component';

describe('ItemdashboardComponent', () => {
  let component: ItemdashboardComponent;
  let fixture: ComponentFixture<ItemdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
