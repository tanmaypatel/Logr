module.exports = {
	dist: {
		files: {
			'<%= distLocation %>/Logr.js': ['<%= compiledLocation %>/Logr.js']
		},
        options: {
        	mangle: false,
            report: 'gzip',
			preserveComments: false,
			banner: '/* <%= pkg.name %> v<%= pkg.version %> ' +
        			'(<%= grunt.template.today("yyyy-mm-dd") %>) */<%= grunt.util.linefeed %>' +
        			'/* <%= pkg.description %> */<%= grunt.util.linefeed %>'
        }
	}
};