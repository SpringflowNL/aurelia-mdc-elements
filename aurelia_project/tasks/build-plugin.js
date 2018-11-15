import gulp from 'gulp';
import {pluginMarkup} from './process-markup';
import {pluginCSS} from './process-css';
import {pluginSCSS} from './process-scss';
import {transpilePlugin} from './transpile';
import del from 'del';
import project from '../aurelia.json';

function clean() {
  return del(project.plugin.output);
}

export default gulp.series(
  clean,
  gulp.parallel(
    pluginMarkup,
    pluginCSS,
    pluginSCSS,
    transpilePlugin
  ),
);