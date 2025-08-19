//Challenge-- To make your first methods in C# and call them to produce different fortunes basedon player luck.
//The challenge just wanted the user to wrap the logic in a method and call it but i decided to make all posibilities their own method as practice.

  Random random = new Random();
	int luck = random.Next(100);

	string[] text = {"You have much to", "Today is a day to", "Whatever work you do", "This is an ideal time to"};
	string[] good = {"look forward to.", "try new things!", "is likely to succeed.", "accomplish your dreams!"};
	string[] bad = {"fear.", "avoid major decisions.", "may have unexpected outcomes.", "re-evaluate your life."};
	string[] neutral = {"appreciate.", "enjoy time with friends.", "should align with your values.", "get in tune with nature."};

	Console.WriteLine("A fortune teller whispers the following words:");
	ReadFortune();
		
	void ReadFortune()
	{
		for (int i = 0; i < 4; i++) 
		{
			void goodLuck()
			{
				Console.Write($"{text[i]} {good[i]} ");
			}
			
			void neutralLuck()
			{
				Console.Write($"{text[i]} {neutral[i]} ");
			}
			
			void badLuck()
			{
				Console.Write($"{text[i]} {bad[i]} ");
			}

			if (luck > 75)
			{
				goodLuck();
			}
			else if (luck > 25)
			{
				neutralLuck();
			}
			else
			{
				badLuck();
			}
		}
	}
