import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchedContentComponent } from './components/searched-content/searched-content.component';
import { SearchRoutingModule } from './search-routing.module';


@NgModule({
  declarations: [SearchedContentComponent],
  imports: [CommonModule, SearchRoutingModule],
  exports: [SearchedContentComponent],
})
export class SearchModule {}
