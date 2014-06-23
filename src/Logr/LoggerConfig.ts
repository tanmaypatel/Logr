/// <reference path="LogLevel.ts"/>

module Logr
{
	export class LoggerConfig
	{
		private _name:string;
		get name():string
		{
			return this._name;
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
		
		
		private _logStackTraceForErrors:boolean;
		get logStackTraceForErrors():boolean
		{
			return this._logStackTraceForErrors;
		}

		set logStackTraceForErrors(value:boolean)
		{
			this._logStackTraceForErrors = value;
		}
		
		constructor(name:string)
		{
			this._name = name;
		}
	}
}