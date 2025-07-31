import {
  AfterViewInit,
  Component,
  ElementRef,
  input,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatIconButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { ITableColumn } from '../../interfaces/ITableColumn.interface';
import { debounceTime, Subject } from 'rxjs';

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
  @ViewChild('tableContainer', { static: true }) tableContainer!: ElementRef;
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator();

  columns = input.required<ITableColumn[]>();
  data = input.required<unknown[]>();
  displayedColumns = signal<string[]>([]);
  dataSource = new MatTableDataSource();

  private resizeSubject = new Subject<void>();

  ngOnInit(): void {
    this.updateDisplayedColumns();
    this.resizeSubject.pipe(debounceTime(30)).subscribe(() => {
      this.updateDisplayedColumns();
    });

    this.observeResize();
    this.dataSource = new MatTableDataSource(this.data());
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getTruncatedText(value: string, maxChars?: number): string {
    if (!value) return '';
    if (!maxChars || value.length <= maxChars) return value;
    return value.substring(0, maxChars).trimEnd() + '...';
  }

  shouldShowTooltip(value: string, maxChars?: number): boolean {
    return !!(maxChars && value && value.length > maxChars);
  }

  private observeResize(): void {
    const resizeObserver = new ResizeObserver(() => {
      this.resizeSubject.next();
    });

    resizeObserver.observe(this.tableContainer.nativeElement);
  }

  private updateDisplayedColumns(): void {
    const availableWidth = this.tableContainer.nativeElement.offsetWidth;

    // Colunas fixas (prioridade 1) e removíveis (prioridade > 1)
    const fixedColumns = this.columns().filter((c) => c.priority === 1);
    const removableColumns = this.columns()
      .filter((c) => c.priority > 1)
      .sort((a, b) => a.priority - b.priority); // mais prioritárias somem por último

    // Vamos controlar quais removíveis cabem
    const includedRemovables: ITableColumn[] = [];
    let usedWidth = fixedColumns.reduce((sum, col) => sum + col.minWidth, 0);

    for (const col of removableColumns) {
      if (usedWidth + col.minWidth <= availableWidth) {
        includedRemovables.push(col);
        usedWidth += col.minWidth;
      }
    }

    // Combinar e preservar a ordem original
    const visibleKeys = [...fixedColumns, ...includedRemovables].map(
      (c) => c.key,
    );
    this.displayedColumns.set(
      this.columns()
        .map((c) => c.key)
        .filter((key) => visibleKeys.includes(key)),
    );
    console.log(this.displayedColumns());
  }
}
