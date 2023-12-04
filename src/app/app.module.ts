import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './componentes/primeiro-componente/primeiro-componente.component';
import { DiretivasComponent } from './componentes/diretivas/diretivas.component';
import { IfRederComponent } from './componentes/if-reder/if-reder.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { EmitterComponent } from './componentes/emitter/emitter.component';
import { ChangeNumberComponent } from './componentes/change-number/change-number.component';
import { ListRenderComponent } from './componentes/list-render/list-render.component';
import { PipesComponent } from './componentes/pipes/pipes.component';
import { TwoWayBidingComponent } from './componentes/two-way-biding/two-way-biding.component';
import { DetalhesItemComponent } from './componentes/detalhes-item/detalhes-item.component';
import { DataFormComponent } from './componentes/data-form/data-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    DiretivasComponent,
    IfRederComponent,
    EventosComponent,
    EmitterComponent,
    ChangeNumberComponent,
    ListRenderComponent,
    PipesComponent,
    TwoWayBidingComponent,
    DetalhesItemComponent,
    DataFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
