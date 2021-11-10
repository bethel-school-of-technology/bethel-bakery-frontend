import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssortedPastryTrayComponent } from './assorted-pastry-tray/assorted-pastry-tray.component';
import { ChocolateCaramelPetitComponent } from './chocolate-caramel-petit/chocolate-caramel-petit.component';
import { ChocolateMintChipComponent } from './chocolate-mint-chip/chocolate-mint-chip.component';
import { ChritmasCookiesComponent } from './chritmas-cookies/chritmas-cookies.component';
import { DutchBrownieComponent } from './dutch-brownie/dutch-brownie.component';
import { GrandmasChocolateChipComponent } from './grandmas-chocolate-chip/grandmas-chocolate-chip.component';
import { CoveredAlmondsComponent } from './covered-almonds/covered-almonds.component';
import { RedVelvetPopsComponent } from './red-velvet-pops/red-velvet-pops.component';
import { VanillaCakePopsComponent } from './vanilla-cake-pops/vanilla-cake-pops.component';

@NgModule({
  declarations: [
    AppComponent,
    AssortedPastryTrayComponent,
    ChocolateCaramelPetitComponent,
    ChocolateMintChipComponent,
    ChritmasCookiesComponent,
    DutchBrownieComponent,
    GrandmasChocolateChipComponent,
    CoveredAlmondsComponent,
    RedVelvetPopsComponent,
    VanillaCakePopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
