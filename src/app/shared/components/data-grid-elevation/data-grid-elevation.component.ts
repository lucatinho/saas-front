import { Component, input } from '@angular/core';
import { DataGridComponent } from '../data-grid/data-grid.component';
import { ITableColumn } from '../../interfaces/ITableColumn.interface';

@Component({
  selector: 'app-data-grid-elevation',
  imports: [DataGridComponent],
  templateUrl: './data-grid-elevation.component.html',
  styleUrl: './data-grid-elevation.component.scss',
})
export class DataGridElevationComponent {
  columns = input.required<ITableColumn[]>();
  data = input.required<unknown[]>();
}
