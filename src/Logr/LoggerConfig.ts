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
		
		
		private _level:LogLevel = LogLevel.ALL;
		get level():LogLevel
		{
			return this._level;
		}

		set level(value:LogLevel)
		{
			this._level = value;
		}
		
		
		private _enabled:boolean = true;
		get enabled():boolean
		{
			return this._enabled;
		}

		set enabled(value:boolean)
		{
			this._enabled = value;
		}
		
		
		private _logStackTraceForErrors:boolean = false;
		get logStackTraceForErrors():boolean
		{
			return this._logStackTraceForErrors;
		}

		set logStackTraceForErrors(value:boolean)
		{
			this._logStackTraceForErrors = value;
		}
		
		constructor(name:string, level:LogLevel)
		{
			this._name = name;
			this._level = level;
		}
	}
}