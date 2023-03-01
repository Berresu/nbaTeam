let oyunKurucular=["Malcolm Brogdon","Derrick White","Marcus Smart","Payton Pritchard","JD Davison","Jrue Holiday","Jevon Carter","James Harden","Tyrese Maxey","De'Anthony Melton","Mac McClung","Shake Milton","Donovan Mitchell","Darius Garland","Ricky Rubio","Rualzinho Neto","Ben Simmons","Seth Curry","Edmond Sumner","Patty Mills","Spencer Dinwiddie","Jalen Brunson","Derrick Rose","Immanuel Quickley","Miles McBride","DaQuan Jeffries","Tyler Herro","Kyle Lowry","Gabe Vincent","Trae Young","Dejounte Murray","Aaron Holiday","Vît Krejci","Monté Morris","Delon Wright","Jordan Doodwin","Kendrick Nunn","Fred VanVleet","Gary Trent Jr.","Dalano Banton","Malachi Flynn","Jeff Dowtin","Lonzo Ball","Ayo Dosunmu","Goran Dragic","Alex Caruso","Coby White","Carlik Jones","Tyrese Haliburton","Andrew Nembhard","T.J. MacConnell","Trevelin Queen","George Hill","Markelle Fultz","Jalen Suggs","Cole Anthony","R.J. Hampton","LaMelo Ball","Terry Rozier","Dennis Smith Jr.","James Bouknight","Théo Maledon","Jaden Ivey","Cade Cunningham","Killian Hayes","Cory Joseph","Jamal Murray","Collin Gillespie","Ish Smith","Reggie Jackson","Ja Morant","Tyus Jones","Kennedy Chandler","De'Aaron Fox","Davion Mitchell","Matthew Dellavedova","Jason Preston","Nah'Shon Hyland","Chris Paul","Cameron Payne","Saben Lee","Luka Doncic","Jaden Hardy","Kyrie Ivring","Frank Ntilikina","McKinley Wright IV","Jose Alvarado","C.J. McCollum","Kira Lewis Jr.","Jaylen Nowell","Mike Conley Jr.","Jordan McLaughlin","Stephen Curry","Jordan Poole","Donte DiVincenzo","Ty Jerome","Gary Payton II","Shai Gilgeous-Alexander","Josh Giddey","Tre Mann","Isaiah Joe","Jordan Clarkson","Collin Sexton","Russell Westbrook","Damian Lillard","Anfernee Simons","Ryan Arcidiacono","Dennis Schröder","Scotty Pippen Jr.","D'Angelo Russell","Tre Jones","Devonte Graham","Kevin Porter Jr.","TyTy Washington","Trevor Hudgins"];
let oyunKurucuNumaraları=["13","9","36","11","20","21","5","1","0","8","9","18","45","10","13","19","10","30","4","8","26","11","4","5","2","8","14","7","2","11","5","3","27","22","55","7","20","23","33","45","22","20","2","12","7","6","0","22","0","2","9","8","7","20","4","50","13","1","3","8","9","23","2","7","18","27","21","14","91","12","21","1","5","15","8","0","3","3","15","38","77","3","2","21","23","15","3","13","4","10","6","30","3","0","10","8","2","3","23","11","00","2","0","0","1","51","17","14","0","33","4","3","0","12"];
let oyunKurucuTakimlar=["Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Milwaukee Bucks","Milwaukee Bucks","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Brooklyn Nets","Brooklyn Nets","Brooklyn Nets","Brooklyn Nets","Brooklyn Nets","New York Knicks","New York Knicks","New York Knicks","New York Knicks","New York Knicks","Miami Heat","Miami Heat","Miami Heat","Atlanta Hawks","Atlanta Hawks","Atlanta Hawks","Atlanta Hawks","Washington Wizards","Washington Wizards","Washington Wizards","Washington Wizards","Toronto Raptors","Toronto Raptors","Toronto Raptors","Toronto Raptors","Toronto Raptors","Chicago Bulls","Chicago Bulls","Chicago Bulls","Chicago Bulls","Chicago Bulls","Chicago Bulls","Indiana Pacers","Indiana Pacers","Indiana Pacers","Indiana Pacers","Indiana Pacers","Orlando Magic","Orlando Magic","Orlando Magic","Orlando Magic","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Detroit Pistons","Detroit Pistons","Detroit Pistons","Detroit Pistons","Denver Nuggets","Denver Nuggets","Denver Nuggets","Denver Nuggets","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Sacramento Kings","Sacramento Kings","Sacramento Kings","Los Angeles Clippers","Los Angeles Clippers","Los Angeles Clippers","Phoenix Suns","Phoenix Suns","Phoenix Suns","Dallas Mavericks","Dallas Mavericks","Dallas Mavericks","Dallas Mavericks","Dallas Mavericks","New Orleans Pelicans","New Orleans Pelicans","New Orleans Pelicans","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Golden State Warriors","Golden State Warriors","Golden State Warriors","Golden State Warriors","Golden State Warriors","Oklahoma City Thunder","Oklahoma City Thunder","Oklahoma City Thunder","Oklahoma City Thunder","Utah Jazz","Utah Jazz","Portland Trail Blazers","Portland Trail Blazers","Portland Trail Blazers","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","San Antonio Spurs","San Antonio Spurs","Houston Rockets","Houston Rockets","Houston Rockets"];

let shootingGuardlar=["Malcolm Brogdon","Derrick White","Marcus Smart","Payton Pritchard","JD Davison","AJ Green","James Harden","Tyrese Maxey","De'Anthony Melton","Mac McClung","Shake Milton","Donovan Mitchell","Darius Garland","Ricky Rubio","Rualzinho Neto","Dru Smith","Jalen Brunson","Derrick Rose","Immanuel Quickley","Miles McBride","DaQuan Jeffries","Tyler Herro","Kyle Lowry","Gabe Vincent","Trent Forrest","Bradley Beal","Quenton Jackson","Fred VanVleet","Gary Trent Jr.","Dalano Banton","Malachi Flynn","Jeff Dowtin","Lonzo Ball","Ayo Dosunmu","Goran Dragic","Alex Caruso","Coby White","Carlik Jones","Tyrese Haliburton","Andrew Nembhard","T.J. MacConnell","Trevelin Queen","George Hill","Markelle Fultz","Jalen Suggs","Cole Anthony","R.J. Hampton","LaMelo Ball","Terry Rozier","Dennis Smith Jr.","James Bouknight","Théo Maledon","Buddy Boeheim","Jared Rhoden","Jamal Murray","Collin Gillespie","Ish Smith","Reggie Jackson","Ja Morant","Tyus Jones","Kennedy Chandler","Malik Monk","Keon Ellis","Nate Darling","Landry Shamet","A.J. Lawson","Dereon Seabron","Jaylen Nowell","Mike Conley Jr.","Jordan McLaughlin","Ryan Rollins","Eugene Omoruyi","Johnny Juzang","Damian Lillard","Anfernee Simons","Ryan Arcidiacono","Max Christie","Blake Wesley","Jalen Green","Josh Christopher","Daishen Nix"];
let shootingGuardNumaraları=["13","9","36","11","20","20","1","0","8","9","18","45","10","13","19","9","11","4","5","2","8","14","7","2","2","3","29","23","33","45","22","20","2","12","7","6","0","22","0","2","9","8","7","20","4","50","13","1","3","8","9","23","27","8","27","21","14","91","12","21","1","0","23","30","14","9","0","4","10","6","2","97","33","0","1","51","10","14","4","9","15"];
let shootingGuardTakimlar=["Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Milwaukee Bucks","Milwaukee Bucks","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Brooklyn Nets","New York Knicks","New York Knicks","New York Knicks","New York Knicks","New York Knicks","Miami Heat","Miami Heat","Miami Heat","Atlanta Hawks","Washington Wizards","Washington Wizards","Toronto Raptors","Toronto Raptors","Toronto Raptors","Toronto Raptors","Toronto Raptors","Chicago Bulls","Chicago Bulls","Chicago Bulls","Chicago Bulls","Chicago Bulls","Chicago Bulls","Indiana Pacers","Indiana Pacers","Indiana Pacers","Indiana Pacers","Indiana Pacers","Orlando Magic","Orlando Magic","Orlando Magic","Orlando Magic","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Detroit Pistons","Detroit Pistons","Denver Nuggets","Denver Nuggets","Denver Nuggets","Denver Nuggets","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Sacramento Kings","Sacramento Kings","Los Angeles Clippers","Phoenix Suns","Dallas Mavericks","New Orleans Pelicans","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Golden State Warriors","Oklahoma City Thunder","Utah Jazz","Portland Trail Blazers","Portland Trail Blazers","Portland Trail Blazers","Los Angeles Lakers","San Antonio Spurs","Houston Rockets","Houston Rockets","Houston Rockets"];

let kisaForvetler=["Jaylen Brown","MarJon Beauchamp","Grayson Allen","Pat Connaughton","Wesley Matthews","Furkan Korkmaz","Danuel House","Jaden Springer","Caris LeVert","Isaac Okoro","Cedi Osman","Lamar Stevens","Dylan Windler","Danny Green","Cam Thomas","Joe Harris","David Duke","Mikal Bridges","R.J. Barrett","Quentin Grimes","Evan Fournier","Trevor Keels","Josh Hart","Nikola Jović","Victor Oladipo","Max Strus","Jamal Cain","Bogdan Bogdanović","AJ Griffin","Tyrese Martin","Garrison Mathews","Donovan Williams","Jonathan Davis","Will Barton","Corey Kispert","OG Anunoby","Ron Harper Jr.","Joe Wieskamp","Zach LaVine","Dalen Terry","Javonte Green","Bennedict Mathurin","Buddy Hield","Chris Duarte","Kendall Brown","Franz Wagner","Gary Harris","Kevon Harris","Kelly Oubre Jr.","Bryce McGowens","Cody Martin","Sviatoslav Mykhailiuk","Alec Burks","Hamidou Diallo","Isaiah Livers","Rodney McGruder","Christian Braun","Kentavious Caldwell-Pope","Peyton Watson","Desmond Bane","Dillon Brooks","Ziaire Williams","Vince Williams","Luke Kennard","John Konchar","Kevin Huerter","Terence Davis","Kawhi Leonard","Paul George","Norman Powell","Terance Mann","Brandon Boston Jr.","Amir Coffey","Eric Gordon","Devin Booker","Damion Lee","Josh Okogie","Terrence Ross","Josh Green","Tim Hardaway Jr.","Theo Pinson","Justin Holiday","Herb Jones","Dyson Daniels","Naji Marshall","Garrett Temple","Josh Richardson","Anthony Edwards","Wendell Moore","Austin Rivers","Nickeil Alexander-Walker","Matt Ryan","Klay Thompson","Patrick Baldwin Jr.","Moses Moody","Anthony Lamb","Jalen Williams","Luguentz Dort","Aaron Wiggins","Lindy Waters III","Talen Horton-Tucker","Ochai Agbaji","Simone Fontecchio","Micah Potter","Keon Johnson","Matisse Thybulle","Lonnie Walker IV","Austin Reaves","Malik Beasley","Davon Reed","Devin Vassell","Malaki Branham","Romeo Langford"];
let kisaForvetNumaralari=["7","0","12","24","23","30","25","11","3","35","16","8","9","14","24","12","6","1","9","6","13","0","3","5","4","31","8","13","14","22","25","4","1","5","24","3","8","15","8","25","24","00","24","3","10","22","14","7","12","7","11","17","5","6","12","17","0","5","8","22","24","8","5","10","46","9","3","2","13","24","14","4","7","10","1","10","2","31","8","11","1","0","5","11","8","41","2","1","7","25","9","37","11","7","4","40","8","5","21","12","0","30","16","25","6","22","4","15","5","9","24","22","35"];
let kisaForvetTakimlar=["Boston Celtics","Milwaukee Bucks","Milwaukee Bucks","Milwaukee Bucks","Milwaukee Bucks","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Brooklyn Nets","Brooklyn Nets","Brooklyn Nets","Brooklyn Nets","New York Knicks","New York Knicks","New York Knicks","New York Knicks","New York Knicks","Miami Heat","Miami Heat","Miami Heat","Miami Heat","Miami Heat","Atlanta Hawks","Atlanta Hawks","Atlanta Hawks","Atlanta Hawks","Atlanta Hawks","Washington Wizards","Washington Wizards","Washington Wizards","Toronto Raptors","Toronto Raptors","Toronto Raptors","Chicago Bulls","Chicago Bulls","Chicago Bulls","Indiana Pacers","Indiana Pacers","Indiana Pacers","Indiana Pacers","Orlando Magic","Orlando Magic","Orlando Magic","Orlando Magic","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Detroit Pistons","Detroit Pistons","Detroit Pistons","Detroit Pistons","Denver Nuggets","Denver Nuggets","Denver Nuggets","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Sacramento Kings","Sacramento Kings","Los Angeles Clippers","Los Angeles Clippers","Los Angeles Clippers","Los Angeles Clippers","Los Angeles Clippers","Los Angeles Clippers","Los Angeles Clippers","Phoenix Suns","Phoenix Suns","Phoenix Suns","Phoenix Suns","Dallas Mavericks","Dallas Mavericks","Dallas Mavericks","Dallas Mavericks","New Orleans Pelicans","New Orleans Pelicans","New Orleans Pelicans","New Orleans Pelicans","New Orleans Pelicans","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Golden State Warriors","Golden State Warriors","Golden State Warriors","Golden State Warriors","Oklahoma City Thunder","Oklahoma City Thunder","Oklahoma City Thunder","Oklahoma City Thunder","Utah Jazz","Utah Jazz","Utah Jazz","Utah Jazz","Portland Trail Blazers","Portland Trail Blazers","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","San Antonio Spurs","San Antonio Spurs","San Antonio Spurs",];

const button=document.getElementById("btnDegistir");
const oyunKurucu=document.getElementById("oyunKurucu");
const shootingGuard=document.getElementById("shootingGuard");
const kisaForvet=document.getElementById("kisaForvet");

const oyunKurucuNumara=document.getElementById("oyunKurucuNumara");
const shootingGuardNumara=document.getElementById("shootingGuardNumara");
const kisaForvetNumara=document.getElementById("kisaForvetNumara");

const oyunKurucuTakim=document.getElementById("oyunKurucuTakim");
const shootingGuardTakim=document.getElementById("shootingGuardTakim");
const kisaForvetTakim=document.getElementById("kisaForvetTakim");

let sayi1=Math.floor(Math.random()*112);
oyunKurucu.innerHTML=oyunKurucular[sayi1];
console.log(sayi1);
console.log(oyunKurucu);
oyunKurucuNumara.innerHTML=oyunKurucuNumaraları[sayi1];
console.log(sayi1);
console.log(oyunKurucuNumara);
oyunKurucuTakim.innerHTML=oyunKurucuTakimlar[sayi1];
console.log(sayi1);
console.log(oyunKurucuTakim);

let sayi2=Math.floor(Math.random()*81);
shootingGuard.innerHTML=shootingGuardlar[sayi2];
console.log(sayi2);
console.log(shootingGuard);
shootingGuardNumara.innerHTML=shootingGuardNumaraları[sayi2];
console.log(sayi2);
console.log(shootingGuardNumara);
shootingGuardTakim.innerHTML=shootingGuardTakimlar[sayi2];
console.log(sayi2);
console.log(shootingGuardTakim);

let sayi3=Math.floor(Math.random()*112);
kisaForvet.innerHTML=kisaForvetler[sayi3];
console.log(sayi3);
console.log(kisaForvet);
kisaForvetNumara.innerHTML=kisaForvetNumaralari[sayi3];
console.log(sayi3);
console.log(kisaForvetNumara);
kisaForvetTakim.innerHTML=kisaForvetTakimlar[sayi3];
console.log(sayi3);
console.log(kisaForvetTakim);


button.addEventListener("click", ()=>{
    let sayi1=Math.floor(Math.random()*112);
    oyunKurucu.innerHTML=oyunKurucular[sayi1];
    console.log(sayi1);
    console.log(oyunKurucu);
    oyunKurucuNumara.innerHTML=oyunKurucuNumaraları[sayi1];
    console.log(sayi1);
    console.log(oyunKurucuNumara);
    oyunKurucuTakim.innerHTML=oyunKurucuTakimlar[sayi1];
    console.log(sayi1);
    console.log(oyunKurucuTakim);

    let sayi2=Math.floor(Math.random()*81);
    shootingGuard.innerHTML=shootingGuardlar[sayi2];
    console.log(sayi2);
    console.log(shootingGuard);
    shootingGuardNumara.innerHTML=shootingGuardNumaraları[sayi2];
    console.log(sayi2);
    console.log(shootingGuardNumara);
    shootingGuardTakim.innerHTML=shootingGuardTakimlar[sayi2];
    console.log(sayi2);
    console.log(shootingGuardTakim);

    let sayi3=Math.floor(Math.random()*112);
    kisaForvet.innerHTML=kisaForvetler[sayi3];
    console.log(sayi3);
    console.log(kisaForvet);
    kisaForvetNumara.innerHTML=kisaForvetNumaralari[sayi3];
    console.log(sayi3);
    console.log(kisaForvetNumara);
    kisaForvetTakim.innerHTML=kisaForvetTakimlar[sayi3];
    console.log(sayi3);
    console.log(kisaForvetTakim);
});

