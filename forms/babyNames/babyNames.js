girlNames = ["Olivia", "Emma", "Ava", "Sophia", "Isabella", "Charlotte", "Amelia", "Mia", "Harper", "Evelyn", "Abigail", "Emily", "Ella", "Elizabeth", "Camila", "Luna", "Sofia", "Avery", "Mila", "Aria"]



babyNames.onshow=function(){
  alrtInstructions.value = "Pick your top 5 girl baby names. Copy the names displayed for later use. Click Next Page when done."
 } 
 


btnTop5.onclick=function(){
  let message = "Your favorite names are: " 
  for (i = 0; i < selNames.text.length; i++)
     message = message + selNames.text[i] + ", "
     
  // remove the last comma
  // slice drops last 2 characters (comma and space)
  //     starts at 0, and goes to end of the 
  //     string minus 2 characters
  message = message.slice(0, -2)
  lblShowNames.value = message
}


btnNextPage.onclick=function(){
  ChangeForm(favBabyNames)
}


