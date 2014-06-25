/// <reference path="Representer.ts"/>
/// <reference path="../LogEvent.ts"/>
/// <reference path="../LogEvent.ts"/>

module Logr
{
	export module Representers
	{
		export class DefaultJSONRepresenter implements Representer
		{
			represent(logEvent:LogEvent):any
			{
				var JSONRepresentation:any = {};
				
				JSONRepresentation.logger = logEvent.loggerName ? logEvent.loggerName : 'DEFAULT';
				JSONRepresentation.logLevel = logEvent.level;
				JSONRepresentation.timestamp = logEvent.timestamp;
				JSONRepresentation.message = logEvent.message;
				JSONRepresentation.additionalData = logEvent.additionalData;
				
				return JSONRepresentation;
			}
		}
	}
}