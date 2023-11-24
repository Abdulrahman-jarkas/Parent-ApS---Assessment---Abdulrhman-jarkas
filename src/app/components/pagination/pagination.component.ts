import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginationApi } from '../../models';

@Component({
  selector: 'pagination',
  standalone: true,
  imports: [NgIf, NgFor, NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  private _pagination!: PaginationApi;
  get pagination() {
    return this._pagination;
  }

  @Input({ required: true }) set pagination(data: PaginationApi) {
    this._pagination = data;
    this.pages = [...Array(data.total_pages).keys()];
  }

  @Output() onChangePage = new EventEmitter<number>();

  pages: number[] = [];
}
