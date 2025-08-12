import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-select',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './search-select.component.html',
  styleUrl: './search-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchSelectComponent {
  readonly label = input<string>(''); // Label do campo
  readonly control = input.required<FormControl | any>(); // FormControl vindo do pai
  readonly options = input<any[]>([]); // Lista completa
  readonly labelKey = input<string>('label'); // Nome do campo de exibição
  readonly valueKey = input<string>('value'); // Nome do campo de valor

  readonly searchTerm = signal<string>(''); // Texto digitado no filtro

  readonly filteredOptions = computed(() =>
    this.options().filter((opt) =>
      String(opt[this.labelKey()])
        .toLowerCase()
        .includes(this.searchTerm().toLowerCase()),
    ),
  );

  updateSearch(value: string): void {
    console.log(this.filteredOptions());
    this.searchTerm.set(value);
  }

  onOpen(open: boolean): void {
    if (open) {
      this.searchTerm.set('');
    }
  }
}
