import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn:
      "https://163da7cd709841588a2a0828dbfefcb9@o366498.ingest.sentry.io/5218704",
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
