// A very simple countdown timer to test my working knowledge and skills learnt so far in C#

CountdownTimer(5);
		
		void CountdownTimer(int timer)
		{
			int countdown = timer * 60;
		
			if (countdown > 0)
			{
				do
				{
				countdown -= 1;
				int minutes = countdown / 60;
				int seconds = countdown % 60;
					if (seconds < 10)
					{
						Console.WriteLine($"Countdown: {minutes}:0{seconds}");
					}
					else
					{
						Console.WriteLine($"Countdown: {minutes}:{seconds}");
					}
				} while (countdown > 0);
			}
			Console.WriteLine("Countdown timer finished!");
		} 
