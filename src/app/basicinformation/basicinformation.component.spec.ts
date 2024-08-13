import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicinformationComponent } from './basicinformation.component';

describe('BasicinformationComponent', () => {
  let component: BasicinformationComponent;
  let fixture: ComponentFixture<BasicinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicinformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
