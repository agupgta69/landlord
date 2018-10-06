
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { Components\loginCardComponent } from './components\login-card.component';

describe('Components\loginCardComponent', () => {
  let component: Components\loginCardComponent;
  let fixture: ComponentFixture<Components\loginCardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Components\loginCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Components\loginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
