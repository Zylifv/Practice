// I wanted to try and get some practice in with calling methods with parameters and having different method types such as int,string and bool.
// This simple Blackjack game gives the player and computer two random rolls between 1 & 10. The player can then choose to receive another random number (twist) or to kep their current total (stick0.
// If the player chooses to twist then they can continue to decide what they want to do, if the player sticks then the computer will decide whether or not to continue to twist.
// Once both players have decided to stick, then the WinOrLose() function will be called and will decide a winner. I want to streamline the win/loss conditions to better suit a compilers mindset... maybe in the future.
//This was a simple exercise to get me used to being able to call methods and their values with different methods and storing the data. The methods may seem excessive for arbitrary numbers like PlayerStartingHand() but it's all practice.
//I am sure that the code is buggy, but i am using .NET fiddle currently which re-runs the compiler every time you press enter, which you need to do to answer (Y/N) or (S/T).

    Random random = new Random();
	string? readResult;
	int[] playerHand = new int[2];
	int[] computerHand = new int[2];
	int currPlayerHand = 0;
	int currComputerHand = 0;
		
	Console.WriteLine("Do you want to play a new round of BlackJack? (Y/N)");
	if (ShouldPlay())
	{
		currPlayerHand = 0;
		currComputerHand = 0;
		PlayGame();
	}
	
	bool ShouldPlay()
	{
		readResult = Console.ReadLine().ToLower();
		if (readResult == "y")
		{
			return true;
		}
		else
		{
			return false;
		}
	}
		
	void PlayGame()
	{
		var newGame = true;
			
		while (newGame)
		{
			
			currPlayerHand = PlayerStartingHand();
			currComputerHand = ComputerStartingHand();
			
			Console.WriteLine($"Your current hand totals: {currPlayerHand}");
			Console.WriteLine($"The computers current hand totals: {currComputerHand}");
			Console.WriteLine("Do you wish to stick or twist? (S/T)");
			Console.WriteLine("\t\t");

			if (!StickOrTwist())
			{
				if (currPlayerHand > 21)
				{
					StickOrTwist();
					newGame = ShouldPlay();
				}
				else
				{
					do
					{
						currPlayerHand += PlayerHand();
						Console.WriteLine($"You choose to twist, your new hand total is: {currPlayerHand}");
						Console.WriteLine($"The computers current hand totals: {currComputerHand}");
						Console.WriteLine("Do you wish to stick or twist? (S/T)");
						StickOrTwist();
					} while (!StickOrTwist());

					while (StickOrTwist())
					{
						do
						{
							currComputerHand += ComputerHand();
							Console.WriteLine($"Your current hand totals: {currPlayerHand}");
							Console.WriteLine($"Computer chooses to twist, new computer hand total is: {currComputerHand}");
						} while (currComputerHand < 17);

						Console.WriteLine(WinOrLose(currPlayerHand, currComputerHand));
						Console.WriteLine("Do you want to play again? (Y/N)");
					}
				}
			}
			newGame = ShouldPlay();
		}
	}
		
	int PlayerStartingHand()
	{
		int x = 0;
		for (int i = 0; i < playerHand.Length; i++)
			{
				playerHand[i] = PlayerHand();
			}
				
			foreach (int num in playerHand)
			{
				x += num;
			}
		return x;
	}
		
	int ComputerStartingHand()
	{
		int y = 0;
		for (int j = 0; j < computerHand.Length; j++)
			{
				computerHand[j] = ComputerHand();
			}
				
			foreach (int num in computerHand)
			{
				y += num;
			}
		return y;
	}
			
	int PlayerHand()
	{
		return random.Next(1, 10);
	}	
		
	int ComputerHand()
	{
		return random.Next(1, 10);
	}	
		
	bool StickOrTwist()
	{
		//Console.Clear();
		readResult = Console.ReadLine().ToLower();
		if (currPlayerHand > 21)
		{
			return true;
		}
        if (readResult == "s")
			{
				return true;
			}
			else if (readResult == "t")
			{
				return false;
			}		
        return false;
	}
			
	string WinOrLose(int currPlayerHand, int currComputerHand)
	{
		if (currPlayerHand > 21)
		{
			return "You lose..";
		}
		else if (currComputerHand > 21)
		{
			return "You Win!";
		}
		else if (currPlayerHand <= 21)
		{
			if (currPlayerHand <= currComputerHand)
			{
				return "You lose...";
			}
		}
		return "You Win!";
	}
