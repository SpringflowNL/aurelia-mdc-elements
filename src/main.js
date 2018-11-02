import environment from './environment';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('resources');

  aurelia.use.developmentLogging(environment.debug ? 'info' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
