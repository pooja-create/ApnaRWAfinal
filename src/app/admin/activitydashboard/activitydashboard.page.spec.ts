import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivitydashboardPage } from './activitydashboard.page';

describe('ActivitydashboardPage', () => {
  let component: ActivitydashboardPage;
  let fixture: ComponentFixture<ActivitydashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitydashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivitydashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
