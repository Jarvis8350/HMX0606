import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MasterViewComponent } from './master-view/master-view.component';
import { IGX_NAVBAR_DIRECTIVES, IgxAvatarComponent, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IgxCheckboxComponent, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Home - IgniteUI for Angular';
}
