import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryModel } from 'src/app/model/CategoryModel';
import { CategoryService } from 'src/app/service/category/category.service';
import { RemoveCategoryComponent } from '../remove-category/remove-category.component';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css'],
})
export class CategoryTableComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'categoryName',
    'categoryDesc',
    'createdDate',
    'action',
  ];
  dataSource = new MatTableDataSource<CategoryModel>();

  products?: CategoryModel[];
  currentProduct: CategoryModel = {};
  currentIndex = -1;

  constructor(
    private categoryService: CategoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.retrieveCategory();
  }

  retrieveCategory(): void {
    this.categoryService.getAllCategory().subscribe({
      next: (data: CategoryModel[]) => {
        this.products = data;
        this.dataSource.data = this.products;
        console.log(data);
      },
      error: (e: any) => console.error(e),
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('updateCategoryForm') updateCategoryForm!: TemplateRef<any>;
  @ViewChild('detailsCategoryForm') detailsCategoryForm!: TemplateRef<any>;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  showUpdateCategoryForm(category: CategoryModel): void {
    const dialogRef = this.dialog.open(this.updateCategoryForm, {
      data: category,
    });
    dialogRef.afterClosed().subscribe((result: CategoryModel) => {
      console.log('Updated category:', result);
    });
  }

  showDetailsCategoryForm(category: CategoryModel): void {
    const dialogRef = this.dialog.open(this.detailsCategoryForm, {
      data: category,
    });
    dialogRef.afterClosed().subscribe((result: CategoryModel) => {
      console.log('Category details:', result);
    });
  }

  removeCategoryModal(category: CategoryModel): void {
    const dialogRef = this.dialog.open(RemoveCategoryComponent, {
      data: category,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.dataSource.data = this.dataSource.data.filter(
          (item) => item.id !== category.id
        );
      }
    });
  }
}
