requirejs.config({

	baseUrl : '../',
	
	waitSeconds: 300,

	paths : {
		'mocha' : 'node_modules/mocha/mocha',
		'chai' : 'node_modules/chai/chai',
		'sinon' : 'node_modules/sinon/pkg/sinon',
		'sinon-chai' : 'node_modules/sinon-chai/lib/sinon-chai'
	},

	shim : {
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
         'sinon-chai',
         'compiled/Logr'],

function(chai, mocha, sinon, sinonChai) 
{
	assert = chai.assert;
	should = chai.should();
	expect = chai.expect;

	chai.use(sinonChai);
	
	mocha.setup('bdd');
	mocha.bail(false);
	
	require([ '../test/spec/Logr/LogLevel.spec',
	          '../test/spec/Logr/Utils/DateTimeUtils.spec',
	          '../test/spec/Logr/Manager.spec'], 
	function()
	{
		mocha.run();
	});
});
