/// <reference path="Logger.ts"/>
/// <reference path="LogLevel.ts"/>
/// <reference path="LoggerConfig.ts"/>
/// <reference path="../components/underscore/underscore.d.ts"/>

module Logr
{
	export class Manager
	{
		private static _rootLoggerConfig = new LoggerConfig('', null, LogLevel.ALL);
		
		private static _rootLogger = new Logger(Manager._rootLoggerConfig); 
		
		static _loggers:Array<Logger>;
		
		static getLogger(name:string):Logger
		{
			var logger:Logger = null;
		
			if(!name)
			{
				logger = Manager._rootLogger;
			}
			else
			{
				var matchedLogger:Logger = _.find(Manager._loggers, function()
				{
					return (matchedLogger.loggerConfig.name == name);
				});
				
				if(matchedLogger)
				{
					logger = matchedLogger;
				}
				else
				{
					var newLoggerConfig:LoggerConfig = new LoggerConfig(name, Manager._rootLoggerConfig, null);
					var newLogger:Logger = new Logger(newLoggerConfig);
					Manager._loggers.push(newLogger);
					
					logger = newLogger;
				}
			}
			
			return logger;
		}
		
		static getDefaultConfig():LoggerConfig
		{
			return Manager._rootLoggerConfig;
		}
	}
}