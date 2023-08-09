import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsFormComponent } from './components/collections-form/collections-form.component';
import { CollectionsTableComponent } from './components/collections-table/collections-table.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ApiInterceptor } from './shared/interceptors/api.interceptor';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { registerLocaleData } from '@angular/common';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import localeEs from '@angular/common/locales/es';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CollectionsSummaryComponent } from './components/collections-summary/collections-summary.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { LoginComponent } from './shared/components/login/login.component';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CollectionsFormComponent,
    CollectionsTableComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SpinnerComponent,
    CollectionsSummaryComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    CalendarModule,
    TableModule,
    HttpClientModule,
    TagModule,
    InputTextModule,
    PasswordModule,
    ConfirmPopupModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'es' },
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
