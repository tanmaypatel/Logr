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
			})
		});
	});
 });