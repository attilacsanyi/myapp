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
    console.error(errorMessage);
    throw new Error(errorMessage);
  }
}
