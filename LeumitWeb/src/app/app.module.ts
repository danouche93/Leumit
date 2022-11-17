import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestLeumitComponent } from './components/test-leumit/test-leumit.component';
import { InputComponent } from './components/ui/input/input.component';
import { ListComponent } from './components/ui/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    TestLeumitComponent,
    InputComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
