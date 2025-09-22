//A simple challenge to change a string written in "snake-case" to Camel-Case.
//I did this exercise already in Typescript but wanted to see how it would differ when using strong typing and the array restrictions of c#

string SnakeCaseToCamelCase(string value)
		{
			string result = "";
			string? firstLetter;
			string[] temp = value.Split("_");
			
			if (value.Length == 0)
				return "";
			else if (value.Length == 1)
				return value.ToLower();
			else
			{
				foreach (var el in temp)
				{
					result += el.Substring(0,1).ToUpper() + el.Substring(1, el.Length - 1);
				}
					firstLetter = result.Substring(0,1).ToLower();
					result = firstLetter + result.Substring(1, result.Length - 1);
				return result;
			}
		}
		
		Console.WriteLine(SnakeCaseToCamelCase("please_print_hello_world"));
