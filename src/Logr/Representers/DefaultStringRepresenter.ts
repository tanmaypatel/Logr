/// <reference path="Representer.ts"/>
/// <reference path="../LogLevel.ts"/>
/// <reference path="../LogEvent.ts"/>
/// <reference path="../Utils/DateTimeUtils.ts"/>

module Logr
{
	export module Representers
	{
		export class DefaultStringRepresenter implements Representer
		{
			represent(logEvent:LogEvent):any
			{
				var representationTokens = [];
				
				representationTokens.push(logEvent.loggerName || 'DEFAULT');
				representationTokens.push(Utils.DateTimeUtils.format(new Date(logEvent.timestamp)));
				representationTokens.push(LogLevel[logEvent.level]);
				representationTokens.push(logEvent.message);
				
				return representationTokens.join(' // ');
			}
		}
	}
}