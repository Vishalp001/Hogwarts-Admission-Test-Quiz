var readlineSync = require('readline-sync');
var Chalk = require('chalk');

var score = 0;

var leadboard =[
  {
    name : "I. Vishal (Muggles)"
  },
  {
    name: "II. Nemish (Wizard) "
    },
    {
    name : "III. Patil Sister II"
    }
]
console.log(Chalk.bold.underline.magentaBright("🧙  WELCOME TO THE WIZARD WORLD 🧙 \n"))
console.log(Chalk.red("THIS EXAM IS SET TO SEE IF YOU QUATIFY \n TO GO TO HOGWARTS WITCHCRAFT AND WIZARDARY SCHOOL" ));
console.log("THIS SIMPLE EXAM WILL DETERMINE \n WEITHER  YOU WILL ABLE TO ATTEND HOGWARTS. \n TEST YOU KNOWLEDGE OF HOGWARTS HISTORY. \n YOUR SINCERELY ~ M.MCGONGALL DEPUTY HEADMISTRESS.")
console.log(Chalk.blue.bold("--------------------------------------------"));
var userName = readlineSync.question(Chalk.green("Book of Admittance! Enter Your Name " ));
console.log(Chalk.blue.bold("--------------------------------"));
console.log("")
console.log(Chalk.red("Welcome to the  Quiz " + userName  ));
// ------------------------------------------------

console.log(Chalk.green("--Each right answer gives you +1 points--"));
console.log(Chalk.red("--Each wrong answer will reduce -1 points--\n "));

// _____________________________________________________

function quiz(question, options , answer){
  console.log(Chalk.blue.bold("--------------------------------"));
  console.log(Chalk.green(question));
  console.log(Chalk.yellow(options));

  var userAnswer = readlineSync.question(Chalk.yellow("Your answer: "));
  console.log(Chalk.blue.bold("--------------------------------"));
  
  if( userAnswer.toUpperCase() === answer.toUpperCase()){
   console.log(Chalk.green.bold("Yeah! You are right"));
    score = score +1;
  }else{
    console.log(Chalk.red.bold("Oops!! You are wrong"));
    score = score - 1;
  }
  console.log(Chalk.red.yellow("Your score is " + score));
}


//quiz ("Ash first pokimon?  ", "picachu");

let question = [
  {"question" : "1). Harry has a scar on his forehead. What shape is it?",
   "options"  : "a). Like a pigs tail \n b). Like a lightning bolt \n c). Like a shining star \n d).Like an egg" ,
   "answer"   : "b"
  },
  { "question": "2).What's the only book in the Harry Potter series that doesn't \n feature Lord Voldemort? \n ",
   "options"  : " a). The Sorcerer's Stone \n b).The Prisoner of Azkaban \n c).The Deathly Hallows ",
   "answer"   : "b"
  },
  {"question" : "3). Who was the Prisoner of Azkaban, and was he \n guilty of the crime he was accused of committing? \n ",
   "options"  : "a).James Potter, not guilty \n  b). Cornelius Fudge, guilty \n  c).Sirius Black, not guilty ",
   "answer"   : "c"
  },
  {"question" : "4).Who was NOT a member of the Order of the Phoenix? \n ",
   "options"  : "a). Mad-Eye Moody \n b).Bellatrix Lestrange \n c).Sirius Black ",
   "answer"   : "b"
  },
  {"question" : "5). Who kills Dumbledore at the end of 'The Half-Blood Prince'? \n ",
   "options"  : "a).Lucius Malfoy \n b). Draco Malfoy \n c).Snape ",
   "answer"   : "c"
  }
]

function quizTime(){
  for (var i = 0; i< question.length ; i++){
  var data = question[i];

  quiz(data.question, data.options, data.answer);
}
console.log("\n Your score is " + score );
}
quizTime();

console.log("");

console.log(Chalk.bgBlack("WE AWAIT YOUR OWL NO LATER THAN JULY 31ST. \n IF YOU MUGGLE-BORN SOMEONE FROM THE SCHOOL \n WILL COME TO YOUR HOME AND SPEAK TO YOUR PARENTS. . . ."))
console.log("")
console.log("THE HOGWARTS EXPRESS LEAVES AT \n 11:00 A. M King's Cross Station, London's Platform 9¾ ");
console.log("IS BETWEEN PLATFORMS 9-10")
console.log("")
console.log(Chalk.greenBright.bgBlack("Student Who QUALIFY for Hogwarts School of Witchcraft and Wizardry"));
console.log("");
for( var i=0; i< leadboard.length ; i++){
  var currentPlayer = leadboard[i];
  console.log(Chalk.bold.italic.blueBright( currentPlayer.name));
}
