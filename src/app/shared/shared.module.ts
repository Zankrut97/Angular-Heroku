import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    NotfoundComponent,
    DatagridComponent,
    FooterComponent  
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[HeaderComponent,SearchBarComponent,NotfoundComponent,DatagridComponent,FooterComponent]
})
export class SharedModule { }
