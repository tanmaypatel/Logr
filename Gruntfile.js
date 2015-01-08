module.exports = function(grunt)
{
	require('time-grunt')(grunt);
	require('load-grunt-config')(grunt, {
        config: { 
			pkg: grunt.file.readJSON('package.json'),
        	srcLocation: 'src',
    		compiledLocation: 'compiled',
    		distLocation: 'dist'
        }
	});
	
	// Default Task(s)
	grunt.registerTask('default', [ 'clean:development', 'typescript:development' ]);
	grunt.registerTask('dist', [ 'clean:dist', 'clean:development', 'typescript:development', 'uglify:dist' ]);
};