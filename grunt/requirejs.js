module.exports = {
	dist: {
		options: {

			baseUrl: '<%= srcLocation %>/',

			paths: {
				
			},

			shim: {
				
			},

			optimize: 'none',
			preserveLicenseComments: false,

			name: '<%= srcLocation %>/scripts/index',
			include: [ ],
			out: '<%= distLocation %>/scripts/index.js'
		}
	}
};