import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import * as Sentry from '@sentry/angular';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
@Sentry.TraceClass({ name: 'AppComponent' })
export class AppComponent {
  title = 'myapp';

  constructor() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // myUndefinedFunction();
  }

  throwError() {
    throw new Error('This is an intentional error!');
  }
}
