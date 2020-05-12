import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfficebearersPage } from './officebearers.page';

describe('OfficebearersPage', () => {
  let component: OfficebearersPage;
  let fixture: ComponentFixture<OfficebearersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficebearersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfficebearersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
