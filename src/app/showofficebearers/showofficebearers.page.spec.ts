import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowofficebearersPage } from './showofficebearers.page';

describe('ShowofficebearersPage', () => {
  let component: ShowofficebearersPage;
  let fixture: ComponentFixture<ShowofficebearersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowofficebearersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowofficebearersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
