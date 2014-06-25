/// <reference path="Representer.ts"/>
/// <reference path="../LogEvent.ts"/>
/// <reference path="../LogEvent.ts"/>
/// <reference path="../../components/moment/moment.d.ts"/>

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
				representationTokens.push(logEvent.message);
				
				return representationTokens.join(' | ');
			}
		}
	}
}