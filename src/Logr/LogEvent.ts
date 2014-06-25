/// <reference path="LogLevel.ts"/>
/// <reference path="LoggerConfig.ts"/>

module Logr
{
	export class LogEvent
	{
		private _loggerName:string;
		get loggerName():string
		{
			return this._loggerName;
		}

		set loggerName(value:string)
		{
			this._loggerName = value;
		}

		
		private _level:LogLevel;
		get level():LogLevel
		{
			return this._level;
		}

		set level(value:LogLevel)
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


		constructor(loggerName:string, level:LogLevel, timestamp:number, message:string)
		{
			this._loggerName = loggerName;
			this._level = level;
			this._timestamp = timestamp;
			this._message = message;
		}
	}
}