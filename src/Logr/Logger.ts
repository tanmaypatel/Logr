/// <reference path="LogLevel.ts"/>
/// <reference path="LoggerConfig.ts"/>
/// <reference path="LogEvent.ts"/>
/// <reference path="Utils/DateTimeUtils.ts"/>

module Logr
{
	export class Logger
	{
		private _loggerConfig:LoggerConfig;
		get loggerConfig():LoggerConfig
		{
			return this._loggerConfig;
		}


		constructor(loggerConfig:LoggerConfig)
		{
			this._loggerConfig = loggerConfig;
		}
		
		
		private log(level:LogLevel, message:string, additionalArguments:any[]):void
		{
			var logEvent = new LogEvent(this.loggerConfig.name, level, Utils.DateTimeUtils.now(), message);
			
			for(var i = 0; i < this.loggerConfig.publishers.length; i++)
			{
				this.loggerConfig.publishers[i].publish(logEvent);
			}
			
		}
		
		trace(message:string, ...args:any[]):void
		{
			this.log(LogLevel.TRACE, message, args);
		}
		
		debug(message:string, ...args:any[]):void
		{
			this.log(LogLevel.DEBUG, message, args);
		}
		
		info(message:string, ...args:any[]):void
		{
			this.log(LogLevel.INFO, message, args);
		}
		
		warn(message:string, ...args:any[]):void
		{
			this.log(LogLevel.WARN, message, args);
		}
		
		error(message:string, ...args:any[]):void
		{
			this.log(LogLevel.ERROR, message, args);
		}
		
		fatal(message:string, ...args:any[]):void
		{
			this.log(LogLevel.FATAL, message, args);
		}
	}
}