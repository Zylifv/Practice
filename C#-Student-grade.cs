/*
The Student Grading application is used to calculate and report student grades based on their graded exam and extra credit assignments.
Your goal in this challenge is to update the code that calculates student grades in accordance with the teacher's updated requirements.
In this second challenge exercise, you need to instantiate the variables that are required for the updated score report, complete the required calculations, and then update the Console.WriteLine() statement that writes student grades to the console.

Your updated application must:

use the existing arrays and array values for all student grade calculations.
use the nested structure provided by the existing foreach and if statements.
calculate the sum of exam and extra credit assignment scores using variables from the first exercise or the original code.
calculate the average for exam scores and extra credit scores using variables from the first exercise or the original code.
calculate the final numeric score as follows: add 10% of the extra credit score sum to the exam score sum, and then divide that value by the number of exams.
calculate the extra credit points earned as follows: divide 10% of the extra credit score sum by the number of exams.
*/

int examAssignments = 5;
		
	int[] sophiaScores = new int[] {90, 86, 87, 98, 100, 94, 90};
	int[] andrewScores = new int[] {92, 89, 81, 96, 90, 89};
	int[] emmaScores = new int[] {90, 85, 87, 98, 68, 89, 89, 89};
	int[] loganScores = new int[] {90, 95, 87, 88, 96, 96};

	string[] studentNames = new string[] { "Sophia", "Andrew", "Emma", "Logan" };
		
	int[] studentScores = new int[10];
	string currentStudentLetterGrade = "";
		
	Console.WriteLine("Student\t\tExamScore\t\tOverall Grade\tExtra Credit\n");
			
	foreach (string name in studentNames)
	{			
		string currentStudent = name;
		
		if (name == "Sophia") 
			studentScores = sophiaScores;
		
		else if (currentStudent == "Andrew")
			studentScores = andrewScores;
		
		else if (currentStudent == "Emma")
        	studentScores = emmaScores;

    	else if (currentStudent == "Logan")
        	studentScores = loganScores;
		
		int sumAssignmentScores = 0;
		
		decimal currentStudentGrade = 0;
		
		int gradedAssignments = 0;
		
		int extraAssignmentCredits = 0;
		
		decimal examScore = 0;
		
		decimal extraCredit = 0;
		
		decimal extraCreditDiff = 0;
		
		decimal studentExtraCredit = 0;
		
		foreach (int score in studentScores)
		{
			gradedAssignments += 1;
		
			if (gradedAssignments <= examAssignments)
			{
				sumAssignmentScores += score;
			}
			else
			{	
				extraAssignmentCredits += 1;
				extraCredit += score;
			}
		}
			studentExtraCredit = (decimal)(extraCredit) / extraAssignmentCredits;
			examScore = (decimal) (sumAssignmentScores) / examAssignments;
			currentStudentGrade = (decimal)((decimal)sumAssignmentScores + ((decimal)extraCredit / 10)) / examAssignments;
			extraCreditDiff = currentStudentGrade - examScore;

			if (currentStudentGrade >= 97)
        		currentStudentLetterGrade = "A+";

    		else if (currentStudentGrade >= 93)
        		currentStudentLetterGrade = "A";

    		else if (currentStudentGrade >= 90)
        		currentStudentLetterGrade = "A-";

    		else if (currentStudentGrade >= 87)
        		currentStudentLetterGrade = "B+";

    		else if (currentStudentGrade >= 83)
        		currentStudentLetterGrade = "B";

    		else if (currentStudentGrade >= 80)
        		currentStudentLetterGrade = "B-";

    		else if (currentStudentGrade >= 77)
        		currentStudentLetterGrade = "C+";

    		else if (currentStudentGrade >= 73)
       			currentStudentLetterGrade = "C";

    		else if (currentStudentGrade >= 70)
        		currentStudentLetterGrade = "C-";

    		else if (currentStudentGrade >= 67)
        		currentStudentLetterGrade = "D+";

    		else if (currentStudentGrade >= 63)
        		currentStudentLetterGrade = "D";

    		else if (currentStudentGrade >= 60)
        		currentStudentLetterGrade = "D-";
			else 
				currentStudentLetterGrade = "F";

			Console.WriteLine($"{currentStudent}:\t\t\t{examScore}\t\t\t{currentStudentGrade}\t{currentStudentLetterGrade}\t\t{studentExtraCredit} ({extraCreditDiff} pts)");
		
}
