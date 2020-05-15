import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersByIdComponent } from './users-by-id.component';

describe('UsersByIdComponent', () => {
  let component: UsersByIdComponent;
  let fixture: ComponentFixture<UsersByIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersByIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
