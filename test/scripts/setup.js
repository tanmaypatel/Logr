requirejs.config({

	baseUrl : '../compiled/',
	
	waitSeconds: 300,

	paths : {
		'underscore' : '../components/underscore/underscore',
		'mocha' : '../node_modules/mocha/mocha',
		'chai' : '../node_modules/chai/chai',
		'sinon' : '../node_modules/sinon/pkg/sinon-1.10.2',
		'sinon-chai' : '../node_modules/sinon-chai/lib/sinon-chai'
	},

	shim : {
		'underscore' : {
			exports : '_'
		},
		
		'chai' : {
			exports : 'chai'
		},
		
		'mocha' : {
			deps : [ 'chai' ],
			exports : 'mocha'
		},
		
		'sinon' : {
			exports : 'sinon'
		}
	}

});

require(['chai', 
         'mocha', 
         'sinon', 
         'sinon-chai' ],

function(chai, mocha, sinon, sinonChai) 
{
	assert = chai.assert;
	should = chai.should();
	expect = chai.expect;

	chai.use(sinonChai);
	
	mocha.setup('bdd');
	mocha.bail(false);
	
	require([ '../test/spec/Logr/LogLevel.spec',
	          '../test/spec/Logr/Utils/DateTimeUtils.spec' ], 
	function()
	{
		mocha.run();
	});
});
