/// <reference path="LogLevel.ts"/>
/// <reference path="LoggerConfig.ts"/>

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
	}
}