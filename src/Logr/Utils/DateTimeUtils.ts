/// <reference path="StringUtils.ts"/>

module Logr
{
	export module Utils
	{
		export class DateTimeUtils
		{
			private static fullMonthNames:string[] = ['January',
								 			   'February',
								 			   'March',
								 			   'April',
								 			   'May',
								 			   'June',
								 			   'July',
								 			   'August',
								 			   'September',
								 			   'October',
								 			   'November',
								 			   'December'];
			
			private static abbriviatedMonthNames:string[] = ['Jan',
								 					  'Feb',
								 					  'Mar',
								 					  'Apr',
								 					  'May',
								 					  'Jun',
								 					  'Jul',
								 					  'Aug',
								 					  'Sep',
								 					  'Oct',
								 					  'Nov',
								 					  'Dec'];
			
			private static fullDayNames:string[] = ['Sunday',
											 'Monday',
								 			 'Tuesday',
								 			 'Wednesday',
								 			 'Thursday',
								 			 'Friday',
								 			 'Saturday'];
			
			private static abbriviatedDayNames:string[] = ['Sun',
											 		'Mon',
								 			 		'Tue',
								 			 		'Wed',
								 			 		'Thu',
								 			 		'Fri',
								 			 		'Sat'];
			
			static now():number
			{
				var timestampForNow:number = Date.now ? Date.now() : new Date().getTime();
				return timestampForNow;
			}
			
			static format(date:Date):string
			{
				var formattedDateTokens:string[] = [];
				
				formattedDateTokens.push(DateTimeUtils.abbriviatedDayNames[date.getDay()]);
				formattedDateTokens.push(DateTimeUtils.abbriviatedMonthNames[date.getMonth()]);
				formattedDateTokens.push(StringUtils.lpad(date.getDate() + '', '0', 2));
				formattedDateTokens.push(date.getFullYear() + '');
				
				var formattedTimeTokens:string[] = [];
				formattedTimeTokens.push(StringUtils.lpad(date.getHours() + '', '0', 2));
				formattedTimeTokens.push(StringUtils.lpad(date.getMinutes() + '', '0', 2));
				formattedTimeTokens.push(StringUtils.lpad(date.getSeconds() + '', '0', 2) + '.' + StringUtils.lpad(date.getMilliseconds() + '', '0', 3));
				
				return formattedDateTokens.join(' ') + ' ' + formattedTimeTokens.join(':');
			}
		}
	}
}