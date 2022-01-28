/* .js files add interaction to your website */
var navLinks2 = document.getElementById("navLinks2");

function showMenu(){
  navLinks2.style.right = "0";
}

function hideMenu(){
  navLinks2.style.right = "-200px";
}


/* Facts Grid*/


var fact1 = document.getElementById("fact1");
var myButton1 = document.getElementById("myButton1");
var factHeader1 = document.getElementById("factHeader1");
var side1 =0;

if(myButton1){
myButton1.addEventListener("click", displayFact1);
}


function displayFact1(){
  if (side1 ==0){
    fact1.innerHTML = "Gun safety laws such as background checks have stopped more than 3.5 million people from obtaining legal guns. Stricter gun policies would also stop many criminals from attempting to get a gun illegally.";
    factHeader1.innerHTML = "FACT 1!"
    side1=1;
    factHeader1.style.background = "#A6E118";
  }
  else {
    fact1.innerHTML = "Why bother with gun safety laws when criminals will inevitably find a way to get their hands on a gun?";
  factHeader1.innerHTML = "MYTH 1!"
  side1=0;
  factHeader1.style.background = "#FF6229";
  }

}

var fact2 = document.getElementById("fact2");
var myButton2 = document.getElementById("myButton2");
var factHeader2 = document.getElementById("factHeader2");
var side2 =0;

if(myButton2){
myButton2.addEventListener("click", displayFact2);
}


function displayFact2(){
  if (side2 ==0){
    fact2.innerHTML = "Cases of people with guns killing people are more deadly than those without them.";
  factHeader2.innerHTML = "FACT 2!"
  side2=1;
  factHeader2.style.background = "#A6E118";
  }
  else {
    fact2.innerHTML = "People kill people. Therefore, this isn't an issue of guns, and gun laws aren't what we need.";
  factHeader2.innerHTML = "MYTH 2!"
  side2=0;
  factHeader2.style.background = "#FF6229";
  }

}

var fact3 = document.getElementById("fact3");
var myButton3 = document.getElementById("myButton3");
var factHeader3 = document.getElementById("factHeader3");
var side3 =0;

if(myButton3){
myButton3.addEventListener("click", displayFact3);
}


function displayFact3(){
  if (side3 ==0){
    fact3.innerHTML = "By federal law, only licensed gun sellers are required to perform background checks. Millions of guns are sold annually without background checks through methods such as the Internet and gun shows, with dealers often unlicensed and are, therefore, not obligated to conduct background checks on their buyers.";
  factHeader3.innerHTML = "FACT 3!"
  side3=1;
  factHeader3.style.background = "#A6E118";
  }
  else {
    fact3.innerHTML = "Currently in the U.S, you have to have a background check to obtain a gun";
  factHeader3.innerHTML = "MYTH 3!"
  side3=0;
  factHeader3.style.background = "#FF6229";
  }

}






var fact4 = document.getElementById("fact4");
var myButton4 = document.getElementById("myButton4");
var factHeader4 = document.getElementById("factHeader4");
var side4 =0;

if(myButton4){
myButton4.addEventListener("click", displayFact4);
}


function displayFact4(){
  if (side4 ==0){
    fact4.innerHTML = "Guns used in crimes in Chicago actually originate from other surrounding states with weaker gun laws. This is just a even bigger reason why we should be pushing for stronger federal gun laws become stronger.";
    factHeader4.innerHTML = "FACT 4!"
    side4=1;
    factHeader4.style.background = "#A6E118";
  }
  else {
    fact4.innerHTML = "Chicago is a prime example of how strict gun laws just don't work.";
    factHeader4.innerHTML = "MYTH 4!"
    side4=0;
    factHeader4.style.background = "#FF6229";
  }

}




// FACT 5

var fact5 = document.getElementById("fact5");
var myButton5 = document.getElementById("myButton5");
var factHeader5 = document.getElementById("factHeader5");
var side5 =0;

if(myButton5){
myButton5.addEventListener("click", displayFact5);
}

function displayFact5(){
  if (side5 ==0){
    fact5.innerHTML = "According to Everytown for Gun Safety, a non-profit organization that advocates for stricter gun laws, in 2020 Black Americans made up 68% of homicide victims in larger cities, many of them victims of gun violence. They are also 10 times as likely as white people to die by firearm homicide";
    factHeader5.innerHTML = "FACT 5!"
    side5=1;
    factHeader5.style.background = "#A7E118";
  }
  else {
    fact5.innerHTML = "Gun violence does not impact some racial groups more than others";
    factHeader5.innerHTML = "MYTH 5!"
    side5=0;
    factHeader5.style.background = "#FF7229";
  }

}

// FACT 6

var fact6 = document.getElementById("fact6");
var myButton6 = document.getElementById("myButton6");
var factHeader6 = document.getElementById("factHeader6");
var side6 =0;

if(myButton6){
myButton6.addEventListener("click", displayFact6);
}

function displayFact6(){
  if (side6 ==0){
    fact6.innerHTML = "The federal law does not prohibit abusive dating partners and convicted stalkers from gaining access to guns";
    factHeader6.innerHTML = "FACT 6!"
    side6=1;
    factHeader6.style.background = "#A6E118";
  }
  else {
    fact6.innerHTML = "Under the federal law, domestic abusers cannot gain guns.";
    factHeader6.innerHTML = "MYTH 6!"
    side6=0;
    factHeader6.style.background = "#FF6229";
  }

}



var fact7 = document.getElementById("fact7");
var myButton7 = document.getElementById("myButton7");
var factHeader7 = document.getElementById("factHeader7");
var side7 =0;

if(myButton7){
myButton7.addEventListener("click", displayFact7);
}

function displayFact7(){
  if (side7 ==0){
    fact7.innerHTML = "According to a research study by the FBI, out of 160 shooting cases from 2000 to 2013, only one incident was stopped by an armed person. On the other hand, 21 incidents were stopped by unarmed people.";
    factHeader7.innerHTML = "FACT 7!"
    side7=1;
    factHeader7.style.background = "#A6E118";
  }
  else {
    fact7.innerHTML = "It takes a good guy with a gun to stop a bad guy with a gun";
    factHeader7.innerHTML = "MYTH 7!"
    side7=0;
    factHeader7.style.background = "#FF6229";
  }

}



var fact8 = document.getElementById("fact8");
var myButton8 = document.getElementById("myButton8");
var factHeader8 = document.getElementById("factHeader8");
var side8 =0;

if(myButton8){
myButton8.addEventListener("click", displayFact8);
}

function displayFact8(){
  if (side8 ==0){
    fact8.innerHTML = "According to Harvard Injury Control Research Center, a gun is more likely to be used for suicide or to threaten others rather than self-defense."
    factHeader8.innerHTML = "FACT 8!"
    side8=1;
    factHeader8.style.background = "#A7E118";
  }
  else {
    fact8.innerHTML = "Guns are important for self defense. Gun control laws would violate second amendment rights: the right to bear arms.";
    factHeader8.innerHTML = "MYTH 8!"
    side8=0;
    factHeader8.style.background = "#FF7229";
  }

}

var fact9 = document.getElementById("fact9");
var myButton9 = document.getElementById("myButton9");
var factHeader9 = document.getElementById("factHeader9");
var side9 =0;

if(myButton9){
myButton9.addEventListener("click", displayFact9);
}

function displayFact9(){
  if (side9 ==0){
    fact9.innerHTML = "Despite there being no “large-scale” shootings in 2020, the number of mass shootings— classified as an incident in which four or more people are shot and injured or killed—has actually risen, drastically, to over 600, the most in the past 5 years and a nearly 50% increase in 2019’s total. Factors such as stay-at-home orders, which trap victims with their abusive partners; financial strains causing high employment and poverty rates, especially in communities of color; and community-intervention programs being hold on pause have all contributed to the surge in gun violence over the pandemic.";
    factHeader9.innerHTML = "FACT 9!"
    side9=1;
    factHeader9.style.background = "#A7E118";
  }
  else {
    fact9.innerHTML = "Gun violence has been down  since the beginning of the pandemic because everyone was at home.";
    factHeader9.innerHTML = "MYTH 9!"
    side9=0;
    factHeader9.style.background = "#FF7229";
  }

}
