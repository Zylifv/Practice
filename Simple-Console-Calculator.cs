//A very simple and quick console calculator in C# to put what i have learnt to practice.

decimal num1 = 0;
decimal num2 = 0;
string operand = "";
decimal result = 0;
string[] operands = {"/", "*", "+", "-"};
bool valid = false;


void Calculator()
{
	Console.WriteLine("Please enter your first digit: ");
	valid = decimal.TryParse(Console.ReadLine(),out num1);
	Console.WriteLine($"First number: {num1}\nPlease enter your second digit.");
	valid = decimal.TryParse(Console.ReadLine(),out num2);
	Console.WriteLine($"First number: {num1} & Second number: {num2}\n\nPlease enter your required assignment operand:\nValid operands are {operands[0]},{operands[1]},{operands[2]},{operands[3]}\n");
	operand = Console.ReadLine();
			
	try
	{
		CalculateOutcome();
	}
	catch
	{
		Console.WriteLine("Error! Attempted to divide by zero.\n");
		result = 0;
	}
			
	Console.WriteLine($"{num1} {operand} {num2} = ");
	Console.WriteLine($"Result: {result}\n");
			
	Calculator();
}
		
decimal CalculateOutcome()
{
	if (operand == "/")
	{
		return result = (num1 / num2);
	}
	if (operand == "*")
	{
		return result = (num1 * num2);
	}
	if (operand == "+")
	{
		return result = (num1 + num2);
	}
	if (operand == "-")
	{
		return result = (num1 - num2);
	}
	else if (operand != "/" || operand != "*" || operand != "-" || operand != "+")
	{
		Console.WriteLine("Invalid operand assignment. Please input a valid operand:\n");
		operand = Console.ReadLine();
	}
	return result;
}
		
Calculator();
