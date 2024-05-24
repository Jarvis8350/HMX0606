import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxCheckboxComponent, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';
import { MasterViewComponent } from './master-view.component';

describe('MasterViewComponent', () => {
  let component: MasterViewComponent;
  let fixture: ComponentFixture<MasterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterViewComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxCheckboxComponent, IgxButtonDirective, IgxRippleDirective ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
