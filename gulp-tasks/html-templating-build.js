module.exports = function (gulp, plugins, config, errorHandler) {
	gulp.task('html-templating-build', function() {
		return gulp.src(config.paths.input.html)
			.pipe(plugins.plumber(errorHandler))
			.pipe(plugins.fileInclude({
				prefix: '@@',
				basepath: '@file',
				indent: true,
				context: {
					task: 'build'
				}
			}))
			.pipe(gulp.dest(config.paths.output.devRoot));
	});
};
