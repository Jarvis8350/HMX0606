import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_INPUT_GROUP_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxCheckboxComponent, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-master-view',
  standalone: true,
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxAvatarComponent, IgxIconComponent, IgxCheckboxComponent, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, RouterLink],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent {}
