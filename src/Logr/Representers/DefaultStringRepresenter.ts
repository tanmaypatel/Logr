/// <reference path="Representer.ts"/>
/// <reference path="../LogLevel.ts"/>
/// <reference path="../LogEvent.ts"/>
/// <reference path="../../components/moment/moment.d.ts"/>8

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
				representationTokens.push(moment(logEvent.timestamp).format('MMM Do YY, h:mm:ss a'));
				representationTokens.push(LogLevel[logEvent.level]);
				representationTokens.push(logEvent.message);
				
				return representationTokens.join(' // ');
			}
		}
	}
}