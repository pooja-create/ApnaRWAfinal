import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceformPage } from './serviceform.page';

describe('ServiceformPage', () => {
  let component: ServiceformPage;
  let fixture: ComponentFixture<ServiceformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
