module.exports = {
	development: {
		src: ['<%= srcLocation %>/**/*.ts'],
        dest: '<%= compiledLocation %>/Logr.js',
        options: {
        	basePath: '<%= srcLocation %>',
            module: 'amd',
            target: 'es5'
        }
	}
};