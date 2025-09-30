//I wanted to create a small method that returns each number that contains the desired number (n) in a given search. The user can put in a range, say 100 and search for n where n is the desired number.
//The method will then find each time a number contains n and returns each instance to the user along with how many times n appeared in the range and a percentage.

void OccurenceOfNumberInRange(int n, int search)
		{
			int val = n;
			string[] nums = new string[n];
			List<int> numbers = new List<int>();
			for (int i = 0; i < n; i++)
			{
				nums[i] = (i + 1).ToString();
				if (nums[i].Contains(search.ToString()))
				{
					numbers.Add(Int32.Parse(nums[i]));
				}
			}
			var result = numbers.ToArray();
			numbers.ForEach(x => Console.Write($"{x.ToString()} "));
			decimal percentage = ((decimal)result.Length / (decimal)val);

			Console.WriteLine($"\n\nNumber of times {search} appears from 1 to {n} is: {result.Length}\n");
			Console.WriteLine($"This is a percentage of {percentage:P2}");
		}

		OccurenceOfNumberInRange(342, 7);
/*
"OccurenceOfNumberInRange(342, 7);" returns:

7 17 27 37 47 57 67 70 71 72 73 74 75 76 77 78 79 87 97 107 117 127 137 147 157 167 170 171 172 173 174 175 176 177 178 179 187 197 207 217 227 237 247 257 267 270 271 272 273 274 275 276 277 278 279 287 297 307 317 327 337

Number of times 7 appears from 1 to 342 is: 61

This is a percentage of 17.84 %
*/
