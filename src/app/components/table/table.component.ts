import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ColumnsDef } from '../../models';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input({ required: true }) data: any[] = [];
  @Input({ required: true }) columnsDef: ColumnsDef[] = [];
}
