import {
  AfterViewInit,
  Component,
  input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { ITableColumn } from '../../interfaces/ITableColumn.interface';

@Component({
  selector: 'app-data-grid',
  imports: [
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconButton,
    MatTooltip,
    MatIcon,
  ],
  templateUrl: './data-grid.component.html',
  styleUrl: './data-grid.component.scss',
})
export class DataGridComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator();

  columns = input.required<ITableColumn[]>();
  data = input.required<unknown[]>()
  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.displayedColumns = this.columns().map((col) => col.key);
    this.dataSource = new MatTableDataSource(this.data());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // this.updateDisplayedColumns(this.containerRef.nativeElement.offsetWidth);
    //
    // window.addEventListener('resize', () => {
    //   this.updateDisplayedColumns(this.containerRef.nativeElement.offsetWidth);
    // });
  }

  // updateDisplayedColumns(containerWidth: number) {
  //   let usedWidth = 0;
  //   this.displayedColumns = [];
  //
  //   const sorted = this.columns.sort((a, b) => a.priority - b.priority);
  //
  //   for (const col of sorted) {
  //     if (usedWidth + col.minWidth <= containerWidth) {
  //       this.displayedColumns.push(col.key);
  //       usedWidth += col.minWidth;
  //     } else {
  //       break;
  //     }
  //   }
  // }
}




