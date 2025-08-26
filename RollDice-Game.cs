//EXERCISE
		//Your challenge is to design a mini-game. The game should select a target number that is a random number between one and five (inclusive).
		//The player must roll a six-sided dice. To win, the player must roll a number greater than the target number.
		//At the end of each round, the player should be asked if they would like to play again, and the game should continue or terminate accordingly.
		
		Random random = new Random();
		string? readResult;

		Console.WriteLine("Would you like to play? (Y/N)");
		if (ShouldPlay()) 
		{
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
    		var play = true;

    		while (play) 
    		{
        		var target = GetTarget();
        		var roll = GetRoll();

        		Console.WriteLine($"Roll a number greater than {target} to win!");
        		Console.WriteLine($"You rolled a {roll}");
        		Console.WriteLine(WinOrLose(roll, target));
        		Console.WriteLine("\nPlay again? (Y/N)");

        		play = ShouldPlay();
    		}
		}
		
		int GetTarget()
		{
			return random.Next(1,6);
		}
		
		int GetRoll()
		{
			return random.Next(1,6);
		}
		
		string WinOrLose(int roll, int target)
		{
			if (roll > target)
			{
				return "You Win!";
			}
			else
			{
				return "You Lose...";
			}
		}
