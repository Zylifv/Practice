//This is a method to find all prime factorisations of a given number (n).
//The initial divisor in the method is 2, the first prime number and whilst n is divisable by this, the prime factor List will be updated with each iteration of a division taking place.
//Once n is divided, it is then put back through the loop but only after it has been divided by the current value of the divisor
//For example: 48 can be divided by 2, therefore 2 is added to the List of prime factors and 48 / 2 = 24 so n is now 24.
//If n cannot be divided by the divisor (2 to begin with), then the divisor is increased by 1. Then we check again for whether or not n can be divided with no remainder.
//This is similar to the sieve of Eratosthenes where if n isn't divisable by 2, then n will never be divisable by any other even number in ascending order. This helps us keep track of available prime factors.
//Once n reaches the value 1, then it can no longer be divided without remainder so the loop is complete. We can then call on the List of prime factors and return them as our result.

Random randomInt = new Random();
		
		void PrimeFactorisation(int n)
		{
			int value = n;
			List<int> primeFactors = new List<int>();
			int divisor = 2;
			
			while (n >= 2)
			{
				if (n % divisor == 0)
				{
					primeFactors.Add(divisor);
					n = n / divisor;
				}
				else
				{
					divisor++;
				}
			}
			var result = primeFactors.ToArray();
			Console.WriteLine($"The Prime Factors of {value} are: \n");
			primeFactors.ForEach(x => Console.Write($"{x.ToString()} "));
		}
		
		
		PrimeFactorisation(randomInt.Next(1, 100000)); //Asks for a random number between 1 and 100,000.
