module.exports = {
	options: {
		livereload: true
	},
	typescript: {
		files: [ '<%= srcLocation %>/**/*.ts' ],
		tasks: [ 'clean:development', 'typescript:development' ]
	}
};