module.exports = {
	development: {
		src: ['<%= srcLocation %>/**/*.ts'],
        dest: '<%= compiledLocation %>',
        options: {
        	basePath: '<%= srcLocation %>',
            module: 'amd',
            target: 'es5'
        }
	}
};