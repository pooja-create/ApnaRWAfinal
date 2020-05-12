import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowrulesPage } from './showrules.page';

describe('ShowrulesPage', () => {
  let component: ShowrulesPage;
  let fixture: ComponentFixture<ShowrulesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowrulesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowrulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
