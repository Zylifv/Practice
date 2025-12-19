//I have a calculator that can decrease the level of solvent in a fomulation correctly, but never had one to increase the diluent effectively and accurately, until now.


  decimal currSolventValue = 60M;
	decimal newSolventValue = 80M;
	decimal solventDiff = (newSolventValue - currSolventValue);
		
	decimal[] vals = new decimal[] {5.0M, 20.0M, 5.0M, 10.0M};
		
	decimal[] valRatios = new decimal[vals.Length];
		
		
		void calculateDifference(decimal[] vals, decimal currSolventValue, decimal newSolventValue)
		{
			decimal min = vals.Min();
		
			List<string> newVals = new List<string>();
		
			for (int i = 0; i < vals.Length; i++)
			{
				valRatios[i] = (vals[i] / min);
			}
		
			decimal valRatiosSum = valRatios.Aggregate(0M, (acc, x) => acc + x); //down here after the ratios are pushed into valRatios array.
			decimal solventRatioCalc = (solventDiff / valRatiosSum);
		
			for (int j = 0; j < vals.Length; j++)
			{
				newVals.Add((solventRatioCalc * valRatios[j]).ToString("#.##"));
			}
		
		
			Console.WriteLine("Original formulae:\n");
			Console.WriteLine($"- {currSolventValue}");
			foreach (int v in vals)
			{
				Console.WriteLine($"- {v}");
			}
			Console.WriteLine("");
		
		
			Console.WriteLine("Final formulae as follows:\n");
			Console.WriteLine($"- {newSolventValue}");
			foreach (string v in newVals)
			{
				Console.WriteLine($"- {v}");
			}
		}
		
		calculateDifference(vals, currSolventValue, newSolventValue);
