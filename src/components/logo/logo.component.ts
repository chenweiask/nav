import { Component, Input } from '@angular/core'
import { getCDN } from 'src/services'

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input() src: string = ''
  @Input() name: string = ''
  @Input() colour: string = '#1890ff'
  @Input() size: number = 35
  @Input() check: boolean = true

  hasError = false

  constructor() {}

  ngOnInit() {}

  get url(): string {
    if (this.src?.startsWith('nav-')) {
      return getCDN(this.src)
    } else {
      return this.src
    }
  }

  onError() {
    this.hasError = true
  }
}
