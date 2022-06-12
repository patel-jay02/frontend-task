import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../theme/theme.module';
import { ApiModule } from '../api/api.module';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MatPseudoCheckboxModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
const BASE_MODULES = [
  ThemeModule,
  MatTableModule,
  MatDialogModule,
  FormsModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatPseudoCheckboxModule,
  MatIconModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatCheckboxModule,
];

const SHARED_MODULE_PROVIDERS: any = [
];

@NgModule({
  imports: [
    CommonModule,
    ...BASE_MODULES
  ],
  exports: [
    ApiModule,
    FormsModule,
    ...BASE_MODULES
  ],
  declarations: [
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return <ModuleWithProviders<SharedModule>>{
      ngModule: SharedModule,
      providers: [...SHARED_MODULE_PROVIDERS],
    };
  }
}
