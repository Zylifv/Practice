//I really wanted to see if i could create a method that returns primes up to a given value.
//Let's say you want all primes up to n where n = 17, i wanted to have it so the function would use previous prime knowledge to give acurate results.
//I learnt about the square-root trick for primes and having to only calculate up to the sqrt n to save time.
//I also discovered the "sieve of eratosthenes" which removes values to calculate based on whether or not they have been removed by a previous factor, starting at 2.
//I decided to create a 2D array where the numbers would be populated based on a given value and the 2nd assigment being a 1 to denote a bool "true".
//If n % j (where j iterates through the sieve) == 0, i reduce the 1 to 0, thus making it "false".
//I haven't found a way myself to have it so the method works from 2 upwards without explicitly stating that 2,3,5 & 7 should be confirmed as primes when working with n being 100.
//This will be something i come back to later on once i have improved my skills.

    /* NOTES------
		To find prime numbers up to n (where n is the search value), start at 2 (first prime number) and iterate as such that you do the following until you reach the num that equals the sqrt of your search num.
		Lets say you are searching for primes up to 49. Math.sqrt(49) == 7, so we will do the following until that number:
		Iterate through the list ascending for each multiple of the current search num (2) and circle them.
		Then find the next un-marked number in the list (3) and iterate through that nums multiples and circle them.
		Then find the next un-marked number (5) and so on until you reach the number that matches your sqrt number or highest one if search sqrt is irrational (123 sqrt is 11.09 so you go until 11).
		Once you hit the sqrt limit of your search num then you just return all un-marked numbers in your list, these are your primes from the first prime (2) until your searched num.
		*/
		void PrintPrimeNumbers(int currentNumber)
		{
			int currentSearchVal = currentNumber;
			int squareRootNum = (int)Math.Sqrt(currentSearchVal);
			int[,] valuesToSearch = new int[currentNumber, 2];
			
			for (int i = 0; i < currentSearchVal; i++)
			{
				valuesToSearch[i, 0] = i+1;
				valuesToSearch[i, 1] = 1;
			}
			for (int i = currentSearchVal - 1; i >= 0; i--)
			{
				for (int j = 2; j <= squareRootNum; j++)
				{
					if (valuesToSearch[i, 0] == 1)
					{
						valuesToSearch[i, 1]--;
					}
					if (valuesToSearch[i, 0] % j == 0)
						valuesToSearch[i, 1]--;
					if (valuesToSearch[i, 0] == 2 || valuesToSearch[i, 0] == 3 || valuesToSearch[i, 0] == 5 || valuesToSearch[i, 0] == 7)
						valuesToSearch[i, 1] = 1;
				}

				if (valuesToSearch[i, 1] == 1)
					Console.WriteLine($"{valuesToSearch[i, 0]} is a prime number.");
				else
					Console.WriteLine($"{valuesToSearch[i, 0]} is NOT a prime number.");
			}
		}
	
		PrintPrimeNumbers(100);
