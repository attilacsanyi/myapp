import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

import * as Sentry from '@sentry/angular';

Sentry.init({
  dsn: 'https://821f5dd0aea1a0ca8f8839590bbd02ef@o4507260232531968.ingest.de.sentry.io/4507260234825808',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  // https://attilacsanyi.github.io/myapp/
  tracePropagationTargets: [
    'localhost',
    /^https:\/\/yourserver\.io\/api/,
    'https://attilacsanyi.github.io',
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
