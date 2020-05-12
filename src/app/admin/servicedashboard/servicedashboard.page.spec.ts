import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicedashboardPage } from './servicedashboard.page';

describe('ServicedashboardPage', () => {
  let component: ServicedashboardPage;
  let fixture: ComponentFixture<ServicedashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicedashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicedashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
