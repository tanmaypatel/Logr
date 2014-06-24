define([ 'mocha', 
         'chai', 
         'sinon' ], 
 function(mocha, chai, sinon)
 {
	describe('Manager', function()
	{
		describe('getLogger method', function()
		{
			it('has static getLogger method', function()
			{
				expect(Logr.Manager.getLogger).to.exist;
			});
			
			it('returns a Logger object on calling it', function()
			{
				expect(Logr.Manager.getLogger()).to.be.an.instanceof(Logr.Logger);
			});
		});
		
		describe('getDefaultConfig method', function()
		{
			it('has static getDefaultConfig method', function()
			{
				expect(Logr.Manager.getDefaultConfig).to.exist;
			});
			
			it('returns a LoggerConfig object on calling it', function()
			{
				expect(Logr.Manager.getDefaultConfig()).to.be.an.instanceof(Logr.LoggerConfig);
			});
		});
	});
 });