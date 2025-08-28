//I tried my hand at creating the Fibonacci sequence from scratch.
//I used the Microsoft template for calling the method but used my own formula to get the desired result.

int result = Fibonacci(8);
		
		int Fibonacci(int n)
		{
			int n1 = 0;
			int n2 = 1;
			
			for (int i = 0; i < n; i++)
			{
				do
				{
					Console.Write($"{n1} {n2} ");
					
					int next = n1 + n2;
					n1 = next;
					n2 = n1 + n2;
				} while (n1 < n);
			}
			return 1;
		}
