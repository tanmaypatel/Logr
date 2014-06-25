/// <reference path="LogLevel.ts"/>
/// <reference path="Publishers/Publisher.ts"/>

module Logr
{
	export class LoggerConfig
	{
		private _name:string = '';
		get name():string
		{
			return this._name;
		}
		
		
		private _parentLoggerConfig:LoggerConfig;
		get parentLoggerConfig():LoggerConfig
		{
			return this._parentLoggerConfig;
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
		
		
		private _logStackTraceForErrors:boolean = true;
		get logStackTraceForErrors():boolean
		{
			return this._logStackTraceForErrors;
		}

		set logStackTraceForErrors(value:boolean)
		{
			this._logStackTraceForErrors = value;
		}
		
		
		private _publishers:Array<Publishers.Publisher> = [];
		get publishers():Array<Publishers.Publisher>
		{
			return this._publishers;
		}
		
		addPublisher(publisher:Publishers.Publisher)
		{
			this._publishers.push(publisher);
		}
		
		removePublisher(publisher:Publishers.Publisher)
		{
			this._publishers.push(publisher);
		}
		
		
		constructor(name:string, parentLoggerConfig:LoggerConfig, level?:LogLevel, publishers?:Array<Publishers.Publisher>)
		{
			this._name = name;
			this._parentLoggerConfig = parentLoggerConfig
			
			if(level)
			{
				this._level = level;
			}
			
			if(publishers)
			{
				for(var i = 0; i < publishers.length; i++)
				{
					this._publishers.push(publishers[i]);
				}
			}
		}
	}
}