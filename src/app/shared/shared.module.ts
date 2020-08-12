import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TrustfullPipe } from './pipes/trustfull.pipe';

@NgModule({
  declarations: [TrustfullPipe],
  imports: [CommonModule],
  exports: [CommonModule, TrustfullPipe]
})
export class SharedModule {}
