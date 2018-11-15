import gulp from 'gulp';
import sass from 'gulp-sass';
import changedInPlace from 'gulp-changed-in-place';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';
import autoprefixer from 'gulp-autoprefixer';

export default function processSCSS() {
  return gulp.src(project.scssProcessor.source)
    .pipe(sass({
		includePaths: ['node_modules']
	}).on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
    .pipe(changedInPlace({firstPass: true}))
    .pipe(build.bundle());
}

// build plugin scss files
export function pluginSCSS() {
  return gulp.src(project.plugin.source.scss)
    .pipe(gulp.dest(project.plugin.output));
}
