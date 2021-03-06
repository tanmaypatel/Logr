/// <reference path="Publisher.ts"/>
/// <reference path="../LogEvent.ts"/>
/// <reference path="../Representers/Representer.ts"/>
/// <reference path="../Representers/DefaultJSONRepresenter.ts"/>
/// <reference path="../Utils/DateTimeUtils.ts"/>

module Logr
{
	export module Publishers
	{
		export class EnhancedConsolePublisher implements Publisher
		{
			private _representer:Representers.Representer = new Representers.DefaultJSONRepresenter();
			get representer():Representers.Representer
			{
				return this._representer;
			}
			
			
			publish(logEvent:LogEvent):void
			{
				var representation = this.representer.represent(logEvent);
				
				var stringPartials = [];
				
				stringPartials.push('%c' + representation.logger);
				stringPartials.push('%c' + Utils.DateTimeUtils.format(new Date(representation.timestamp)));
				stringPartials.push('%c' + LogLevel[representation.logLevel]);
				stringPartials.push('%c' + representation.message);
				
				var logLevelColor:string = '';
				var messageColor = 'black';
				
				switch(representation.logLevel)
				{
					case LogLevel.TRACE:
						logLevelColor = 'gray';
						break;
						
					case LogLevel.DEBUG:
						logLevelColor = 'darkgreen';
						break;
						
					case LogLevel.INFO:
						logLevelColor = 'blue';
						break;
						
					case LogLevel.WARN:
						logLevelColor = 'orange';
						break;
						
					case LogLevel.ERROR:
						messageColor = 'red';
						logLevelColor = 'red';
						break;
						
					case LogLevel.FATAL:
						logLevelColor = 'darkred';
						messageColor = 'darkred';
						break;
				}
				
				console.log.apply(console, [stringPartials.join(' '), 
											'color: darkgray', 
											'color: silver', 
											'color: ' + logLevelColor, 
											'color: ' + messageColor].concat(logEvent.additionalData || []));
			}
		}
	}
}