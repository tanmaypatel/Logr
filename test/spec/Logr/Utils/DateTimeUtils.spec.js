define([ 'mocha', 
         'chai', 
         'sinon' ], 
 function(mocha, chai, sinon)
 {
	var DateTimeUtils = Logr.Utils.DateTimeUtils;
	
	describe('DateTimeUtils', function()
	{
		describe('now method', function()
		{
			it('does exist', function()
			{
				expect(DateTimeUtils.now).to.exist; 
			});
			
			it('returns current timestamp as a number', function()
			{
				var now = 9876543210;
				var clock = sinon.useFakeTimers(now);
				expect(DateTimeUtils.now()).to.equal(now);
				expect(DateTimeUtils.now()).to.be.a('number');
				clock.restore();
			});
		});
	});
 });