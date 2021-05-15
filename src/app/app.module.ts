import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { RegisterProductsComponent } from './register-products/register-products.component';
import { FormsModule } from '@angular/forms';
import { UpdateProductsComponent } from './update-products/update-products.component';
import { DeleteProductsComponent } from './delete-products/delete-products.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    RegisterProductsComponent,
    UpdateProductsComponent,
    DeleteProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
