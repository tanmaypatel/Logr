module Logr
{
	export module Utils
	{
		export class DateTimeUtils
		{
			static now():number
			{
				var timestampForNow:number = Date.now ? Date.now() : new Date().getTime();
				return timestampForNow;
			}
		}
	}
}