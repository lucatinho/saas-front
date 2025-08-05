import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HotToastService } from '@ngxpert/hot-toast';
import { ToastUtils } from './shared/utils/toast.utils';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(toast: HotToastService) {
    ToastUtils.init(toast);
  }
}
