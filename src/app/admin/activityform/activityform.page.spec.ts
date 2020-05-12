import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivityformPage } from './activityform.page';

describe('ActivityformPage', () => {
  let component: ActivityformPage;
  let fixture: ComponentFixture<ActivityformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ActivityformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
