module.exports = {
	options: {
		livereload: true
	},
	configFiles: {
		files: [ 'Gruntfile.js', 'grunt/*.js' ],
		options: {
			livereload: false,
			reload: true
		}
	},
	typescript: {
		files: [ '<%= srcLocation %>/**/*.ts' ],
		tasks: [ 'clean:development', 'typescript:development' ]
	}
};