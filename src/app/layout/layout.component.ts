import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule }                       from '@angular/router';
import { NzLayoutModule }                     from 'ng-zorro-antd/layout';
import { NzMenuModule }                       from 'ng-zorro-antd/menu';

@Component({
  standalone: true,
  imports: [NzLayoutModule, NzMenuModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [`./layout.component.scss`]
})
export class LayoutComponent {
}
