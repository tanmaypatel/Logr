module Logr
{
	export module Formatters
	{
		export interface ErrorLike {
			name:string;
			message:string;
			lineNumber?:number;
			fileName?:string;
			stack?:string;
		};
		
		export class ErrorFormatter
		{
			private getMessage(error:ErrorLike)
			{
				if(error.message)
				{
					return error.message;
				}
				else
				{
					return error.toString ? error.toString() : String(error);
				}
			}
			
			format(error:ErrorLike, showStacktrace:boolean)
			{
				if(error)
				{
					var errorString = error.name ? error.name + ': ' : 'Error: ';
					errorString += this.getMessage(error);
					errorString += '\r\n';
					errorString += error.fileName ? ' in file ' + error.fileName : '';
					errorString += error.lineNumber ? ' @ line ' + error.lineNumber : '';
					
					if(showStacktrace && error.stack)
					{
						errorString += '\r\n';
						errorString += error.stack;
					}
					
					return errorString;
				}
				else
				{
					return '';
				}
			}
		}
	}
}