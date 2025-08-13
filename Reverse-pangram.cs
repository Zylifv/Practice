//A way to reverse the order of letters in each word without reversing the word order itself

string pangram = "The quick brown fox jumps over the lazy dog";
Console.WriteLine($"Pangram: --{pangram}--\n");
		
string[] words = pangram.Split(' '); //Takes the words from the pangram and stores each one in the array (words[0] == "The", words[1] == "quick" etc...)
Array.Reverse(words); //Reverses the words not the letters
string result = String.Join(" ", words);
Console.WriteLine($"Word order reversed: --{result}--\n");
		
char[] rever = result.ToCharArray(); //pushes the reversed words (not letters) into the array as characters not strings -- (d o g  l a z y  t h e  o v e r  ... etc)
Array.Reverse(rever); //reverses the order of the characters -- (e h T  k c i u q  n w... etc)
string finalResult = String.Join("", rever); // joins the characters back together to form the now complete challenge
Console.WriteLine($"Letter order reversed: --{finalResult}--\n");

/*
Challenge solution given by the module--

string pangram = "The quick brown fox jumps over the lazy dog";

		// Step 1
		string[] message = pangram.Split(' ');

		//Step 2
		string[] newMessage = new string[message.Length];
		Console.WriteLine(message.Length);

		// Step 3
		for (int i = 0; i < message.Length; i++)
		{
    		char[] letters = message[i].ToCharArray();
    		Array.Reverse(letters);
    		newMessage[i] = new string(letters);
		}

		//Step 4
		string result = String.Join(" ", newMessage);
		Console.WriteLine(result);

  */
