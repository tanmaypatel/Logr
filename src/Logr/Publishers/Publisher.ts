/// <reference path="../LogEvent.ts"/>
/// <reference path="../Representers/Representer.ts"/>

module Logr
{
	export module Publishers
	{
		export interface Publisher
		{
			publish(logEvent:LogEvent):void;
		}
	}
}