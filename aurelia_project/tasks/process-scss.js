import gulp from 'gulp';
import sass from 'gulp-sass';
import changedInPlace from 'gulp-changed-in-place';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processSCSS() {debugger
  return gulp.src(project.scssProcessor.source)
    .pipe(changedInPlace({firstPass: true}))
    .pipe(sass().on('error', sass.logError))
    .pipe(build.bundle());
}

// build plugin scss files
export function pluginSCSS() {
  return gulp.src(project.plugin.source.scss)
    .pipe(gulp.dest(project.plugin.output));
}
