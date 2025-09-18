//I wanted to try and make a simple Console game about Heroes and monsters.
//You can currently choose between 3 heroes, the Swordsman, the Archer and the Spellcaster.
//Each one has their own unique stats for Health and Attack with scalable room for more to be added later.
//You can see the Hero's stats at any time and also i have not implemented a shop to upgrade weapons if you so desire.
//The Hero must fight through 3 monsters (currently) and beat them all in a row to succeed. If they lose at any point they must go back to the first monster and all stats reset too.
//This was a fun way to challenge myself on what i have learnt so far about the C# language.

    	string currentHero = "";
		string currentHeroHealth = "";
		string currentHeroAttack = "";
		string currentHeroWeapon = "";
		string startingWeapon = "";
		int currHeroAttackStat = 0;
		string currentMonster = "";
		string? readResult;
		string menuSelection = "";
		int charMax = 3;
		int defeatedMonsters = 0;
		int coins = 0;
		Random reward = new Random();
		bool validHero = false;
		string heroName = "";
		string heroHealth = "";
		string heroAttack = "";
		string heroWeapon = "";
		string weaponUpgrade = "";
		bool weaponUpgradeCheck = false;
		string monsterName = "";
		string monsterHealth = "";
		string monsterAttack = "";
		string heroInfo = "";
		bool currentBattleFinished = false;
		
		string[,] heroes = new string[charMax, 4];
		string[,] monsters = new string[charMax, 3];
		string[] weapons = new string[charMax];
		
		for (int i = 0; i < charMax; i++)
		{
			switch(i)
			{
				case 0:
					heroName = "Swordsman";
					heroHealth = "100";
					heroAttack = "20";
					heroWeapon = "Rusted Sword";
					break;
				case 1:
					heroName = "Archer";
					heroHealth = "75";
					heroAttack = "30";
					heroWeapon = "Wooden Bow";
					break;
				case 2:
					heroName = "Spellcaster";
					heroHealth = "50";
					heroAttack = "35";
					heroWeapon = "Malformed Stave";
					break;
				default:
					heroName = "";
					heroHealth = "";
					heroAttack = "";
					heroWeapon = "";
					break;
			}
			
			heroes[i, 0] = "Name: " + heroName;
			heroes[i, 1] = "Health: " + heroHealth;
			heroes[i, 2] = "Attack: " + heroAttack;
			heroes[i, 3] = "Weapon: " + heroWeapon;
			
			switch(i)
			{
				case 0:
					monsterName = "Imp";
					monsterHealth = "40";
					monsterAttack = "10";
					break;
				case 1:
					monsterName = "Troll knight";
					monsterHealth = "70";
					monsterAttack = "15";
					break;
				case 2:
					monsterName = "Ogre";
					monsterHealth = "110";
					monsterAttack = "20";
					break;
				default:
					monsterName = "";
					monsterHealth = "";
					monsterAttack = "";
					break;
			}
			
			monsters[i, 0] = "Name: " + monsterName;
			monsters[i, 1] = "Health: " + monsterHealth;
			monsters[i, 2] = "Attack: " + monsterAttack;
			
			switch(i)
			{
				case 0:
					weaponUpgrade = "Maliketh's Black Blade";
					break;
				case 1:
					weaponUpgrade = "Ironeye's Harp Bow";
					break;
				case 2:
					weaponUpgrade = "Recluse's Crystal Staff";
					break;
				default:
					break;
			}
			
			weapons[i] = weaponUpgrade;
		}
		
		
	do
	{
		Console.Clear();
		
		Console.WriteLine("Welcome to Heroes and Monsters! Please choose one of the following options:\n");
		Console.WriteLine("1. Choose your Hero!");
		Console.WriteLine("2. See current Hero stats.");
		Console.WriteLine("3. Fight a Monster!");
		Console.WriteLine("4. Visit the shop.\n");
		Console.WriteLine("Enter your selection number below...");
		
		readResult = Console.ReadLine();
		if (readResult != null)
		{
			menuSelection = readResult.ToLower();
		}

		switch (menuSelection)
		{
			case "1":
				//SELECT HERO
				bool validStat = false;
				
				if (validHero)
				{
					Console.WriteLine("You have already chosen a Hero.\n");
					continue;
				}
				
				int heroCount = 0;
				Console.WriteLine("\nChoose your Hero!\n");
				
				for (int i = 0; i < charMax; i++)
				{
					if (heroes[i, 0] != "Name: ")
					{
						for (int j = 0; j < 4; j++)
						{
							heroInfo += heroes[i, j].ToString() + "\n";
						}
					}
				}
					Console.WriteLine(heroInfo);
					Console.WriteLine("\nType in (y/n) if you wish to choose the current hero: ");
					
					do {
						Console.WriteLine($"Would you like to choose the Hero -- {heroes[heroCount,0]}?");
						readResult = Console.ReadLine();
						if (readResult == "y")
						{
							currentHero = heroes[heroCount,0].Substring(6);
							currentHeroHealth = heroes[heroCount, 1].Substring(8);
							currentHeroAttack = heroes[heroCount, 2].Substring(8);
							currentHeroWeapon = heroes[heroCount, 3].Substring(8);
							startingWeapon = heroes[heroCount, 3].Substring(8);
							validStat = int.TryParse(currentHeroAttack, out currHeroAttackStat); //TODO				
							Console.WriteLine($"You chose the Hero {currentHero}!\nTheir stats are:");
							Console.WriteLine($"					{heroes[heroCount, 1]}");
							Console.WriteLine($"					{heroes[heroCount, 2]}");
							Console.WriteLine($"					{heroes[heroCount, 3]}\n");
							validHero = true;
							continue;
						} else if (readResult == "n")
						{
							heroCount += 1;
							if (heroCount >= 3)
							{
								Console.WriteLine("No Hero chosen, please try again...");
								break;
							}
						}
					} while (!validHero);
				
				Console.WriteLine("Press the enter key to continue");
				readResult = Console.ReadLine();
				break;
			case "2":
				//HERO STATS
				if (!validHero)
				{
					Console.WriteLine("You must choose a Hero first before seeing their stats.\n");
				}
				else
				{
					Console.WriteLine("Your current Heroes stats are:\n");
					Console.WriteLine($"Current Hero: {currentHero}\nCurrent Hero Health: {currentHeroHealth}\nCurrent Hero Attack: {currHeroAttackStat}\nCurrent Weapon: {currentHeroWeapon}");
					Console.WriteLine($"\nYour current coins total: {coins}\n");
				}
				Console.WriteLine("Press the enter key to continue");
				readResult = Console.ReadLine();
				break;
			case "3":
				//FIGHT	
				int currentHeroAttackStat = 0;
				int currentHeroHealthStat = 0;
				int currentMonsterAttackStat = 0;
				int currentMonsterHealthStat = 0;
				int currentDamage = 0;
				bool valid = false;
				Random attack = new Random();
				int currentRoll = attack.Next(8, 11);
				
				if (!validHero)
				{
					Console.WriteLine("You must choose a Hero before going to fight any Monsters!\n");
				}
				else if (validHero)
				{
					valid = int.TryParse(currentHeroAttack, out currentHeroAttackStat); //TODO
					valid = int.TryParse(currentHeroHealth, out currentHeroHealthStat);
					
					Console.WriteLine("You must defeat each Monster in a row to win, your Health will be recovered to full after each fight. Good Luck!\n");

						if (defeatedMonsters >= 0 && defeatedMonsters <= 2)
						{
							if (currentBattleFinished)
							{
								defeatedMonsters += 1;
							}
							currentBattleFinished = false;
							currentMonster = monsters[defeatedMonsters, 0].Substring(6);
							monsterHealth = monsters[defeatedMonsters, 1].Substring(8);
							monsterAttack = monsters[defeatedMonsters, 2].Substring(8);
							valid = int.TryParse(monsterHealth, out currentMonsterHealthStat);
							valid = int.TryParse(monsterAttack, out currentMonsterAttackStat);
							
							Console.WriteLine($"Monster fight!\n\nYou must beat the {currentMonster}!\n");
							//Monsters stats
							Console.WriteLine($"The {currentMonster}'s stats are:");
							Console.WriteLine($"					{monsters[defeatedMonsters, 1]}");
							Console.WriteLine($"					{monsters[defeatedMonsters, 2]}\n");
							//Hero's stats
							Console.WriteLine("You current Heroes stats are:");
							Console.WriteLine($"					Health: {currentHeroHealth}");
							Console.WriteLine($"					Current Hero Attack: {currentHeroAttack}\n");					
						}
					
						do
						{
							currentRoll = attack.Next(8, 11);
							Console.WriteLine($"{currentMonster}'s HP: {currentMonsterHealthStat}\n");
							currentDamage = ((currentRoll * currentHeroAttackStat) / 10);
							currentMonsterHealthStat -= currentDamage;
							Console.WriteLine($"{currentMonster} was damaged and lost {currentDamage} health and now has {currentMonsterHealthStat}.");
							if (currentMonsterHealthStat <= 0)
							{
								currentBattleFinished = true;
								break;
							}
							currentRoll = attack.Next(8, 11);
							Console.WriteLine($"Current hero HP: {currentHeroHealthStat}\n");
							currentDamage = ((currentRoll * currentMonsterAttackStat) / 10);
							currentHeroHealthStat -= currentDamage;
							Console.WriteLine($"{currentHero} was damaged and lost {currentDamage} health and now has {currentHeroHealthStat}.");
						} while (currentHeroHealthStat > 0 && currentMonsterHealthStat > 0);
					
						Console.WriteLine(currentMonsterHealthStat <= 0 ? "\nYou win the round! You have earned some coins as a reward." : "\nYou lose, game over...");
						coins += reward.Next(5,8);
						}
				if (currentHeroHealthStat <= 0)
				{
					defeatedMonsters = 0;
					coins = 0;
					if (weaponUpgradeCheck == true)
					{
						currHeroAttackStat -= 5;
						currentHeroWeapon = startingWeapon;
					}
				}
				
				currentMonster = "";
				monsterHealth = "";
				monsterAttack = "";
				
				if (defeatedMonsters == 2 && currentBattleFinished)
				{
					Console.WriteLine("\nYou have defeated every Monster in the game! Congratulations, you win!\n");
					defeatedMonsters = 0;
					weaponUpgradeCheck = false;
					currHeroAttackStat -= 5;
					currentHeroWeapon = startingWeapon;
				}
				Console.WriteLine("Press the enter key to continue");
				readResult = Console.ReadLine();
				break;
			case "4":
				//VISIT SHOP
				if (coins <= 0)
				{
					Console.WriteLine("The shop-keeper tells you that coins are required to purchase upgrades from the shop and shoos you away.\n");
				}
				else if (coins >= 1)
				{
					Console.WriteLine("The shop-keeper sees a battle worn hero enter the shop and offers you a gander at their wares...\n");
					for (int i = 0; i < charMax; i++)
					{
						if (currentHero == heroes[i,0].Substring(6))
						{
							if (weaponUpgradeCheck == true)
							{
								Console.WriteLine("You already have the best available weapon for your hero. You leave the shop.");
							}
							if (!weaponUpgradeCheck)
							{
								Console.WriteLine($"The shop-keeper offers you -{weapons[i]}- for 10 coins. Do you want to purchase the upgrade? (Y/N) Current coins: {coins}");
								readResult = Console.ReadLine();
								if (readResult == "y")
								{
									if (coins >= 10)
									{
										Console.WriteLine($"You have purchased -{weapons[i]}- and have added 5 to your base attack.");
										weaponUpgradeCheck = true;
										currentHeroWeapon = weapons[i];
										currHeroAttackStat += 5;
										coins -= 10;
									}
									else
									{
										Console.WriteLine("The shop-keeper miffs at your lack of coin. You are unable to buy this upgrade, try fighting more monsters to earn some coin.");
									}
								}
							}
							else if (readResult == "n")
							{
								Console.WriteLine("You leave the shop.\n");
							}
						}
					}
					
				}
				Console.WriteLine("Press the enter key to continue");
				readResult = Console.ReadLine();
				break;
			default:
				break;
		}
	} while (menuSelection != "");
