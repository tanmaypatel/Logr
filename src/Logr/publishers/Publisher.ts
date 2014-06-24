/// <reference path="../LogEvent.ts"/>

module Logr
{
	export interface Publisher
	{
		publish(logEvent:LogEvent);
	}
}