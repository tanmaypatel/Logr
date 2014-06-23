define([ 'mocha', 
         'chai', 
         'sinon', 
         'Logr/LogLevel' ], 
 function(mocha, chai, sinon)
 {
	describe('LogLevel', function()
	{
		it('can not be instanciated', function()
		{
			var instanciateLogLevel = function()
			{
				return new Logr.LogLevel;
			};
			
			expect(instanciateLogLevel).to.throw(Error); 
		});
		
		it('has keys for all log levels', function()
		{
			expect(Logr.LogLevel.ALL).to.exist; 
			expect(Logr.LogLevel.TRACE).to.exist; 
			expect(Logr.LogLevel.DEBUG).to.exist; 
			expect(Logr.LogLevel.INFO).to.exist; 
			expect(Logr.LogLevel.WARN).to.exist; 
			expect(Logr.LogLevel.ERROR).to.exist; 
			expect(Logr.LogLevel.FATAL).to.exist; 
			expect(Logr.LogLevel.OFF).to.exist; 
		});
		
		it('has levels in proper order', function()
		{
			expect(Logr.LogLevel.ALL).to.be.below(Logr.LogLevel.TRACE); 
			expect(Logr.LogLevel.TRACE).to.be.below(Logr.LogLevel.DEBUG);
			expect(Logr.LogLevel.DEBUG).to.be.below(Logr.LogLevel.INFO);
			expect(Logr.LogLevel.INFO).to.be.below(Logr.LogLevel.WARN);
			expect(Logr.LogLevel.WARN).to.be.below(Logr.LogLevel.ERROR); 
			expect(Logr.LogLevel.ERROR).to.be.below(Logr.LogLevel.FATAL);
			expect(Logr.LogLevel.FATAL).to.be.below(Logr.LogLevel.OFF);
		});
	});
 });