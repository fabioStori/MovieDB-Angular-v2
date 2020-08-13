import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'trustfull'
})
export class TrustfullPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
