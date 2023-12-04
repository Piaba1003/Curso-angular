import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRenderComponent } from './componentes/list-render/list-render.component';
import { PrimeiroComponenteComponent } from './componentes/primeiro-componente/primeiro-componente.component';
import { DiretivasComponent } from './componentes/diretivas/diretivas.component';
import { EmitterComponent } from './componentes/emitter/emitter.component';
import { IfRederComponent } from './componentes/if-reder/if-reder.component';
import { PipesComponent } from './componentes/pipes/pipes.component';
import { TwoWayBidingComponent } from './componentes/two-way-biding/two-way-biding.component';
import { DetalhesItemComponent } from './componentes/detalhes-item/detalhes-item.component';

const routes: Routes = [
  {path: '', component: PrimeiroComponenteComponent},
  {path: 'app-list-render', component: ListRenderComponent},
  {path: 'app-diretivas', component: DiretivasComponent},
  {path: 'app-eventos', component: EventCounts},
  {path: 'app-emitter', component: EmitterComponent},
  {path: 'if-reder', component: IfRederComponent},
  {path: 'app-pipes', component: PipesComponent},
  {path: 'app-two-way-biding', component: TwoWayBidingComponent},
  {path: 'list/:id', component: DetalhesItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
