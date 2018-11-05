import gulp from 'gulp';
import sass from 'gulp-sass';
import changedInPlace from 'gulp-changed-in-place';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processSCSS() {
  return gulp.src(project.scssProcessor.source)
    .pipe(sass().on('error', sass.logError))    
    .pipe(changedInPlace({firstPass: true}))
    .pipe(build.bundle());
}

// build plugin scss files
export function pluginSCSS() {
  return gulp.src(project.plugin.source.scss)
    .pipe(gulp.dest(project.plugin.output));
}
