//I wanted to get back into more simple C# fundamentals by creating a simple number guessing game.

    Random num = new Random();
		int computerNum = 0;
		int playerNum = 0;
		string? readResult;
		int remainingGuesses = 0;
		bool gameOverTrigger = false;
		
		Console.WriteLine("Do you want to play a new round of Number Guesser? (Y/N)");
		
		
		if (ShouldPlay())
        {
            playerNum = 0;
            computerNum = 0;
			remainingGuesses = 5;
			gameOverTrigger = false;
            PlayGame();
        }
		else
		{
			return;
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
		
		
		void GameOver()
		{
			Console.WriteLine("\nGame over... You lose!\n");
			Console.WriteLine("Do you want to play a new round of Number Guesser? (Y/N)");
		}
		
		
		void PlayGame()
        {
            var newGame = true;

            while (newGame)
            {
				computerNum = num.Next(1, 100);
				Console.WriteLine("\nBeep-boop, I am thinking of a number between 1 & 100... can you guess it within 5 tries?\n");
				Console.WriteLine($"Remaining guesses: {remainingGuesses}\n");
				
				do
				{
					if (remainingGuesses > 0)
					{
						readResult = Console.ReadLine();
						Int32.TryParse(readResult, out playerNum);
						if (playerNum > computerNum)
						{
							remainingGuesses -= 1;
							Console.WriteLine("Zzzp, you are incorrect, your number is larger than mine, try again!");
							Console.WriteLine($"You have {remainingGuesses} guesses left.");
						
						}
						else if (playerNum < computerNum)
						{
							remainingGuesses -= 1;
							Console.WriteLine("Wrrrzz, you are incorrect, your number is smaller than mine, try again!");
							Console.WriteLine($"You have {remainingGuesses} guesses left.");
						}
						else if (playerNum == computerNum)
						{
							Console.WriteLine("Zzzp-pop, you are correct! Well done human.");
						}
					}
					else
					{
						gameOverTrigger = true;
						GameOver();
					}
				} while (gameOverTrigger == false);
			
				newGame = ShouldPlay();
			}	
		} //PlayGame();
