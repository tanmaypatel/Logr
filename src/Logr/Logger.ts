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


		constructor(name:string, level:LogLevel)
		{
			this._loggerConfig = new LoggerConfig(name, level);
		}
		
		
		private log(level:LogLevel, message:string, ...args:any[]):void
		{
			var logEvent = new LogEvent(this.loggerConfig, Utils.DateTimeUtils.now(), message);
		}
	}
}