module Logr
{
	export module Utils
	{
		export class StringUtils
		{
			static lpad(originalString:string, stringToPad:string, requiredLength:number):string
			{
				var paddedString = originalString;
				
				while(paddedString.length < requiredLength)
				{
					paddedString = stringToPad + paddedString;
				}
				
				return paddedString;
			}
			
			static rpad(originalString:string, stringToPad:string, requiredLength:number):string
			{
				var paddedString = originalString;
				
				while(paddedString.length < requiredLength)
				{
					paddedString = paddedString + stringToPad;
				}
				
				return paddedString;
			}
		}
	}
}