import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SuperadminformPage } from './superadminform.page';

describe('SuperadminformPage', () => {
  let component: SuperadminformPage;
  let fixture: ComponentFixture<SuperadminformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperadminformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SuperadminformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
