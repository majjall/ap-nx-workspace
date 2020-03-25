import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

import { CoreModule } from "@ap-nx-workspace/core";

import { reducers } from "./app.reducer";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 25 }) : []
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
