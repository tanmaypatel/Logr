/// <reference path="../LogEvent.ts"/>

module Logr
{
	export module Representers
	{
		export interface Representer
		{
			represent(logEvent:LogEvent):any;
		}
	}
}