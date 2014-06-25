/// <reference path="Publisher.ts"/>
/// <reference path="../LogEvent.ts"/>
/// <reference path="../Representers/Representer.ts"/>
/// <reference path="../Representers/DefaultJSONRepresenter.ts"/>
/// <reference path="../../components/moment/moment.d.ts"/>

module Logr
{
	export module Publishers
	{
		export class ConsolePublisher implements Publisher
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
				stringPartials.push('%c' + moment(representation.timestamp).format('MMM DD YY, HH:mm:ss.SSS'));
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
				
				console.log(stringPartials.join(' '), 
							'color: darkgray', 
							'color: silver', 
							'color: ' + logLevelColor, 
							'color: ' + messageColor);
			}
		}
	}
}