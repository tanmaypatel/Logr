module.exports = function(grunt)
{
	require('time-grunt')(grunt);
	require('load-grunt-config')(grunt, {
        config: { 
        	srcLocation: 'src',
    		compiledLocation: 'compiled',
    		distLocation: 'dist'
        }
	});
	
	// Default Task(s)
	grunt.registerTask('default', [ 'clean:development', 'typescript:development' ]);
};