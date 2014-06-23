module Logr
{
	export enum LogLevel
	{
		ALL = Number.MIN_VALUE,
		TRACE = 10000,
		DEBUG = 20000,
		INFO = 30000,
		WARN = 40000,
		ERROR = 50000,
		FATAL = 60000,
		OFF = Number.MAX_VALUE
	}
}