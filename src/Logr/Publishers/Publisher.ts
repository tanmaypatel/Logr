/// <reference path="../LogEvent.ts"/>

module Logr
{
	export module Publishers
	{
		export interface Publisher
		{
			publish(logEvent:LogEvent);
		}
	}
}