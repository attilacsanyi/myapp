import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import * as Sentry from '@sentry/angular';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FormsModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
@Sentry.TraceClass({ name: 'AppComponent' })
export class AppComponent {
  title = 'myapp';
  errorDetail = 'My error detail';

  constructor() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // myUndefinedFunction();
  }

  throwError() {
    const errorMessage = `This is an intentional error!: ${this.errorDetail}`;

    const v = 5;
    let _a = 2 * v;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _a = _a + 1;

    console.error(errorMessage);
    throw new Error(errorMessage);
  }
}
