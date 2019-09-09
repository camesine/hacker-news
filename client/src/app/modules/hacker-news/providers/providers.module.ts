import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ContextsProviderService } from './contexts/contexts-provider.service';
import { HttpClientInterceptor } from './interceptor/httpClient.interceptor';

@NgModule({
  providers: [
    ContextsProviderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpClientInterceptor,
      multi: true,
    }
  ],
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ProvidersModule { }
