/// <reference path="LogLevel.ts"/>
/// <reference path="LoggerConfig.ts"/>

module Logr
{
	export class LogEvent
	{
		private _loggerConfig:LoggerConfig;
		get loggerConfig():LoggerConfig
		{
			return this._loggerConfig;
		}

		set loggerConfig(value:LoggerConfig)
		{
			this._loggerConfig = value;
		}

		
		private _level:string;
		get level():string
		{
			return this._level;
		}

		set level(value:string)
		{
			this._level = value;
		}

		
		private _timestamp:number;
		get timestamp():number
		{
			return this._timestamp;
		}

		set timestamp(value:number)
		{
			this._timestamp = value;
		}

		
		private _message:string;
		get message():string
		{
			return this._message;
		}

		set message(value:string)
		{
			this._message = value;
		}

		
		private _additionalData:any[];
		get additionalData():any[]
		{
			return this._additionalData;
		}

		set additionalData(value:any[])
		{
			this._additionalData = value;
		}


		constructor(loggerConfig:LoggerConfig, timestamp:number, message:string)
		{
			if(loggerConfig)
			{
				this._loggerConfig = loggerConfig;
			}

			if(timestamp)
			{
				this._timestamp = timestamp;
			}

			if(message)
			{
				this._message = message;
			}
		}
	}
}