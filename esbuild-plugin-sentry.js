import { sentryEsbuildPlugin } from '@sentry/esbuild-plugin';

const authToken = process.env.SENTRY_AUTH_TOKEN;

module.exports = sentryEsbuildPlugin({
  debug: true,
  sourcemaps: {
    // assets: ['**/*.map'],
    filesToDeleteAfterUpload: ['dist/**/*.map'],
  },
  org: 'ac-k0',
  project: 'javascript-angular',
  authToken,
  telemetry: true,
  release: {
    // cleanArtifacts: true,
    uploadLegacySourcemaps: {
      paths: ['dist'],
      // sourceMapReference: false,
    },
  },
});
