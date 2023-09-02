import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink }                         from '@angular/router';
import { NzButtonModule }                     from 'ng-zorro-antd/button';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-about',
  imports: [NzButtonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
}
