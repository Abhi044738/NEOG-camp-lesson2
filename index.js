
// data
var levelonequestion = [{ question: "The first foreigner to invite India was?", answer: "Prasenajit" },
{ question: "Which language was used in the literature of the Sangam period?", answer: "Tamil" },
{ question: "Lord Buddha was born in?", answer: "Lumbini" },
{ question: "Which is considered the Magna Carta of the Indian people?", answer: "Queen Victoria’s Proclamation" },
{ question: "What newspaper was started by Annie Besant?", answer: "New India" },
{ question: "Who was the real founder of the Aligarh Muslim University?", answer: "Syed Ahmad Khan" },
{ question: "Who was the alter ego of Tipu Sultan during the Treaty of Seringapatam?", answer: "Lord Dalhousie" },
{ question: "Who was the first Indian to crack the British Indian Civil Services Examination for the first time in Indian History?", answer: "Satyendranath Tagore" },
{ question: " Who was the Viceroy when the Jallianwala Bagh Massacre took place?", answer: "Chelmsford" },
{ question: " Champaran and Kheda Satyagrahas were led by?", answer: "Mahatma Gandhi" },
{ question: "Which book is written by Pandit Jawaharlal Nehru?", answer: "Outline of History" },
{ question: "Which reformer was associated with Prarthana Samaj?", answer: "Atmaram Pandurang" },
{ question: "Who was the leader who made the famous ‘Objectives Resolution’, in the Constituent Assembly?", answer: "Nawab Salimullah" },]

var leveltwoquestion = [{ question: "In India which is the first Indian Language to attain Classical Language Status?", answer: "Tamil" },
{ question: "The World famous Khonghampat Orchidarium is in which of the following Indian State?[Karnataka,Manipur,Meghalaya,Madhya Pradesh]", answer: "Manipur" },
{ question: "How many religions in India that have been awarded “National Minority” status? [In words]", answer: " Six" },
{ question: "Who is regarded as the chief architect of the Constitution of India?", answer: "BR Ambedkar" },
{ question: "Neelam Sanjiva Reddy was the _______ President of India?[In words]", answer: "Sixth" },
{ question: " Who launched the first indigenous Indian shipping service between Tuticorin and Colombo?", answer: "VO Chidambaranar" },
{ question: "Rock Shelters of Bhimbetka, one of the Cultural Heritage Sites in India, is situated in which Indian State?", answer: "Madhya Pradesh" },
{ question: "Largest Brackish Water Lagoon – Chilka lake, is in which Indian State?", answer: "Odisha" }]
var life = 5

var score = 0


//functions

//basic function
var readlinesync = require('readline-sync');
function userinput(string) {
  a = readlinesync.question(string)
  return a
}
function play(question, answer) {
  var useranswer = userinput(question)
  if (useranswer.toLowerCase() == answer.toLowerCase()) {
    console.log("You are correct!!!!")
    score = score + 1
  }
  else {
    console.log("You are worng")
    score = score - 1
    life = life - 1
  }
}
//main function
function playerEntry() {
  var username = userinput("Enter your name:")
  var confor = userinput("Welcome " + username + ". Do you know about India")
  return confor
}

function game(A, b) {
  console.log("Let's play a quize")
  console.log("........................." + b + "..........................")
  for (var i = 0; i < A.length; i++) {
    var z = A[i]
    play(z.question, z.answer)
  }
}



//__main__
var confor = playerEntry()
while (confor.toLowerCase() == "yes") {
  game(levelonequestion, "LevelOne")
  const totalscore = (levelonequestion.length) / 2
  if (score > totalscore) {
    console.log("Congratulations!!!!!!!/nYou won level one")
    console.log("Lets's move to level two")
    var confor = userinput("Do you want to play tevel two?....")
    game(leveltwoquestion, "LevelTwo")
    console.log("ThankYou!!!!!\nYour score is :" + score)
    var confor = userinput("Do you want to play again")
  }
  else {
    console.log("ThankYou!!!!!\nYour score is :" + score)
    var confor = userinput("Want to continue?.....")
  }
}
console.log("ThankYou!!!!!\nYour score is :" + score)
