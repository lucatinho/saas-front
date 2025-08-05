import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import { DataGridComponent } from '../data-grid/data-grid.component';
import { ITableColumn } from '../../interfaces/ITableColumn.interface';

@Component({
  selector: 'app-data-grid-elevation',
  imports: [DataGridComponent],
  templateUrl: './data-grid-elevation.component.html',
  styleUrl: './data-grid-elevation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataGridElevationComponent {
  readonly columns = input.required<ITableColumn[]>();
  readonly data = input.required<unknown[]>();
}
