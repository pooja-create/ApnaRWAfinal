import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemberdashboardPage } from './memberdashboard.page';

describe('MemberdashboardPage', () => {
  let component: MemberdashboardPage;
  let fixture: ComponentFixture<MemberdashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberdashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemberdashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
