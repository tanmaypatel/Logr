/// <reference path="Publisher.ts"/>
/// <reference path="../LogEvent.ts"/>
/// <reference path="../Representers/Representer.ts"/>
/// <reference path="../Representers/DefaultStringRepresenter.ts"/>

module Logr
{
	export module Publishers
	{
		export class BasicConsolePublisher implements Publisher
		{
			private _representer:Representers.Representer = new Representers.DefaultStringRepresenter();
			get representer():Representers.Representer
			{
				return this._representer;
			}
			
			
			publish(logEvent:LogEvent):void
			{
				var representation = this.representer.represent(logEvent);
				
				var logFunction = console.log;
				
				switch(logEvent.level)
				{
					case LogLevel.TRACE:
						logFunction = console.log;
						break;
						
					case LogLevel.DEBUG:
						logFunction = console.debug;
						break;
						
					case LogLevel.INFO:
						logFunction = console.info;
						break;
						
					case LogLevel.WARN:
						logFunction = console.warn;
						break;
						
					case LogLevel.ERROR:
						logFunction = console.error;
						break;
						
					case LogLevel.FATAL:
						logFunction = console.error;
						break;
				}
				
				logFunction.call(console, representation);
			}
		}
	}
}