/// <reference path="Logger.ts"/>
/// <reference path="LogLevel.ts"/>
/// <reference path="LoggerConfig.ts"/>
/// <reference path="Publishers/ConsolePublisher.ts"/>

module Logr
{
	export class Manager
	{
		private static _rootLoggerConfig = new LoggerConfig('', null, LogLevel.ALL, [new Publishers.ConsolePublisher()]);
		
		private static _rootLogger = new Logger(Manager._rootLoggerConfig); 
		
		private static NAMESPACE_SEPARATOR:string = '.';
		
		static _loggers:Array<Logger> = [Manager._rootLogger];
		
		static getLogger(name:string):Logger
		{
			var logger:Logger = null;
		
			var matchedLogger:Logger = Manager._findLoggerByName(name);
			
			if(matchedLogger)
			{
				logger = matchedLogger;
			}
			else
			{
				var parentLoggerConfig = Manager._findParentLoggerConfigForName(name);
				var newLoggerConfig:LoggerConfig = new LoggerConfig(name, parentLoggerConfig, null);
				var newLogger:Logger = new Logger(newLoggerConfig);
				Manager._loggers.push(newLogger);
				
				logger = newLogger;
			}
			
			return logger;
		}
		
		private static _findLoggerByName(name:string):Logger
		{
			var macthedLogger:Logger = null;
		
			if(name)
			{
				for(var i = 0; i < Manager._loggers.length; i++)
				{
					var currentLogger = Manager._loggers[i];
					
					if(currentLogger.loggerConfig.name === name)
					{
						macthedLogger = currentLogger;
						break;
					}
				}
			}
			else
			{
				macthedLogger = Manager._rootLogger;
			}
			
			return macthedLogger;
		}
		
		private static _findParentLoggerConfigForName(name:string):LoggerConfig
		{
			var matchedLoggerConfig:LoggerConfig = null;
			
			if(name)
			{
				var matchedLogger = null;
				var tokens = name.split(Manager.NAMESPACE_SEPARATOR);
				
				while(!matchedLogger)
				{
					var removedToken = tokens.pop();
					
					var remainingNamespace = tokens.join(Manager.NAMESPACE_SEPARATOR);
					
					matchedLogger = Manager._findLoggerByName(remainingNamespace);
				}
				
				matchedLoggerConfig = matchedLogger.loggerConfig;
			}
			else
			{
				matchedLoggerConfig = Manager.getDefaultConfig();
			}
			
			return matchedLoggerConfig;
		}
		
		static getDefaultConfig():LoggerConfig
		{
			return Manager._rootLoggerConfig;
		}
	}
}