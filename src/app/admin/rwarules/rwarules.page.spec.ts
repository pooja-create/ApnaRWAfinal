import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RwarulesPage } from './rwarules.page';

describe('RwarulesPage', () => {
  let component: RwarulesPage;
  let fixture: ComponentFixture<RwarulesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RwarulesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RwarulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
