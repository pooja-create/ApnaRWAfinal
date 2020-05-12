import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MemberformPage } from './memberform.page';

describe('MemberformPage', () => {
  let component: MemberformPage;
  let fixture: ComponentFixture<MemberformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MemberformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
