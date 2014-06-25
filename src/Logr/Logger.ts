/// <reference path="LogLevel.ts"/>
/// <reference path="LoggerConfig.ts"/>
/// <reference path="LogEvent.ts"/>
/// <reference path="Publishers/Publisher.ts"/>
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
		
		
		isEnable():boolean
		{
			return this.loggerConfig.enabled;
		}
		
		enable():void
		{
			this.loggerConfig.enabled = true;
		}
		
		disable():void
		{
			this.loggerConfig.enabled = false;
		}
		
		
		addPublisher(publisher:Publishers.Publisher)
		{
			this.loggerConfig.publishers.push(publisher);
		}
		
		removePublisher(publisher:Publishers.Publisher)
		{
			var publisherIndex = this.loggerConfig.publishers.indexOf(publisher);
			if(publisherIndex !== -1)
			{
				this.loggerConfig.publishers.splice(publisherIndex, 1);
			}
		}
		
		
		private log(level:LogLevel, message:string, additionalArguments:any[]):void
		{
			var logEvent = new LogEvent(this.loggerConfig.name, level, Utils.DateTimeUtils.now(), message);
			
			var parents = this.loggerConfig.getParents();
			
			var publishers = [];
			var isLoggingEnabled = true;
			
			for(var i = 0; i < parents.length; i++)
			{
				isLoggingEnabled = parents[i].enabled && isLoggingEnabled;
				
				for(var j = 0; j < parents[i].publishers.length; j++)
				{
					if(publishers.indexOf(parents[i].publishers[j]) === -1)
			    	{
						publishers.push(parents[i].publishers[j]);
			    	}
				}
			}
			
			isLoggingEnabled = this.loggerConfig.enabled && isLoggingEnabled;
			
			for(var j = 0; j < this.loggerConfig.publishers.length; j++)
			{
				if(publishers.indexOf(this.loggerConfig.publishers[j]) === -1)
		    	{
					publishers.push(this.loggerConfig.publishers[j]);
		    	}
			}
			
			if(isLoggingEnabled)
			{
				for(var i = 0; i < publishers.length; i++)
				{
					publishers[i].publish(logEvent);
				}
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