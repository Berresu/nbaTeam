let oyunKurucular=["Jrue Holiday","Jevon Carter","Goran Dragić","Marcus Smart","Malcolm Brogdon","Derrick White","Payton Pritchard","JD Davison","James Harden","Tyrese Maxey","De'Anthony Melton","Shake Milton","Mac McClung","Donovan Mitchell","Darius Garland","Ricky Rubio","Raulzinho Neto","Jalen Brunson","Derrick Rose","Immanuel Quickley","Miles McBride","DaQuan Jeffries","Duane Washington Jr.","Ben Simmons","Seth Curry","Spencer Dinwiddie","Patty Mills","Edmond Sumner","Tyler Herro","Kyle Lowry","Gabe Vincent","Trae Young","Dejounte Murray","Vít Krejčí","Aaron Holiday","Fred VanVleet","Gary Trent Jr.","Dalano Banton","Malachi Flynn","Jeff Dowtin","Monté Morris","Delon Wright","Kendrick Nunn","Jordan Goodwin","Jamaree Bouyea","Lonzo Ball","Ayo Dosunmu","Alex Caruso","Coby White","Patrick Beverley","Carlik Jones","Tyrese Haliburton","Andrew Nembhard","T. J. McConnell","Trevelin Queen","George Hill","Markelle Fultz","Cole Anthony","Jalen Suggs","Michael Carter-Williams","LaMelo Ball","Terry Rozier","Dennis Smith Jr.","James Bouknight","Théo Maledon","Jaden Ivey","Killian Hayes","Cade Cunningham","Cory Joseph","R. J. Hampton","Jamal Murray","Collin Gillespie","Ish Smith","Reggie Jackson","Ja Morant","Tyus Jones","Kennedy Chandler","De'Aaron Fox","Davion Mitchell","Matthew Dellavedova","P. J. Dozier","Chris Paul","Cameron Payne","Saben Lee","Stephen Curry","Jordan Poole","Donte DiVincenzo","Gary Payton II","Ty Jerome","Mike Conley Jr.","Jaylen Nowell","Jordan McLaughlin","Luka Dončić","Kyrie Irving","Jaden Hardy","McKinley Wright IV","Frank Ntilikina","Russell Westbrook","Jason Preston","Nah'Shon Hyland","Xavier Moon","Jordan Clarkson","Collin Sexton","Kris Dunn","Damian Lillard","Anfernee Simons","Ryan Arcidiacono","D'Angelo Russell","Dennis Schröder","Scotty Pippen Jr.","C. J. McCollum","Jose Alvarado","Kira Lewis Jr.","Shai Gilgeous-Alexander","Josh Giddey","Isaiah Joe","Tre Mann","Jared Butler","Tre Jones","Devonte' Graham","Kevin Porter Jr.","TyTy Washington","Trevor Hudgins"];
let oyunKurucuNumaraları=["21","5","7","36","13","9","11","20","1","0","8","18","9","45","10","13","19","11","4","5","2","8","40","10","30","26","8","4","14","7","2","11","5","27","3","23","33","45","22","20","22","55","20","7","11","2","12","6","0","21","22","0","2","9","8","7","20","50","4","11","1","3","8","2","9","23","7","2","18","13","27","21","14","7","12","21","1","5","15","8","35","3","15","38","30","3","0","8","10","10","4","6","77","2","3","23","21","0","1","3","15","00","2","11","0","1","51","1","17","14","3","15","13","2","3","11","23","14","33","4","3","0","12"];
let oyunKurucuTakimlar=["Milwaukee Bucks","Milwaukee Bucks","Milwaukee Bucks","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","New York Knicks","New York Knicks","New York Knicks","New York Knicks","New York Knicks","New York Knicks","Brooklyn Nets","Brooklyn Nets","Brooklyn Nets","Brooklyn Nets","Brooklyn Nets","Miami Heat","Miami Heat","Miami Heat","Atlanta Hawks","Atlanta Hawks","Atlanta Hawks","Atlanta Hawks","Toronto Raptors","Toronto Raptors","Toronto Raptors","Toronto Raptors","Toronto Raptors","Washington Wizards","Washington Wizards","Washington Wizards","Washington Wizards","Washington Wizards","Chicago Bulls","Chicago Bulls","Chicago Bulls","Chicago Bulls","Chicago Bulls","Chicago Bulls","Indiana Pacers","Indiana Pacers","Indiana Pacers","Indiana Pacers","Indiana Pacers","Orlando Magic","Orlando Magic","Orlando Magic","Orlando Magic","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Detroit Pistons","Detroit Pistons","Detroit Pistons","Detroit Pistons","Detroit Pistons","Denver Nuggets","Denver Nuggets","Denver Nuggets","Denver Nuggets","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Sacramento Kings","Sacramento Kings","Sacramento Kings","Sacramento Kings","Phoenix Suns","Phoenix Suns","Phoenix Suns","Golden State Warriors","Golden State Warriors","Golden State Warriors","Golden State Warriors","Golden State Warriors","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Dallas Mavericks","Dallas Mavericks","Dallas Mavericks","Dallas Mavericks","Dallas Mavericks","Los Angeles Clippers","Los Angeles Clippers","Los Angeles Clippers","Los Angeles Clippers","Utah Jazz","Utah Jazz","Utah Jazz","Portland Trail Blazers","Portland Trail Blazers","Portland Trail Blazers","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","New Orleans Pelicans","New Orleans Pelicans","New Orleans Pelicans","Oklahoma City Thunder","Oklahoma City Thunder","Oklahoma City Thunder","Oklahoma City Thunder","Oklahoma City Thunder","San Antonio Spurs","San Antonio Spurs","Houston Rockets","Houston Rockets","Houston Rockets"];
let oyunKurucuResimler=["imagesOyunKurucu/jureHoliday","imagesOyunKurucu/jevonCarter","imagesOyunKurucu/garonDragic","imagesOyunKurucu/marcusS","imagesOyunKurucu/derrickW"];

let shootingGuardlar=["Malcolm Brogdon","Derrick White","Marcus Smart","Payton Pritchard","JD Davison","AJ Green","James Harden","Tyrese Maxey","De'Anthony Melton","Mac McClung","Shake Milton","Donovan Mitchell","Darius Garland","Ricky Rubio","Rualzinho Neto","Dru Smith","Jalen Brunson","Derrick Rose","Immanuel Quickley","Miles McBride","DaQuan Jeffries","Tyler Herro","Kyle Lowry","Gabe Vincent","Trent Forrest","Bradley Beal","Quenton Jackson","Fred VanVleet","Gary Trent Jr.","Dalano Banton","Malachi Flynn","Jeff Dowtin","Lonzo Ball","Ayo Dosunmu","Goran Dragic","Alex Caruso","Coby White","Carlik Jones","Tyrese Haliburton","Andrew Nembhard","T.J. MacConnell","Trevelin Queen","George Hill","Markelle Fultz","Jalen Suggs","Cole Anthony","R.J. Hampton","LaMelo Ball","Terry Rozier","Dennis Smith Jr.","James Bouknight","Théo Maledon","Buddy Boeheim","Jared Rhoden","Jamal Murray","Collin Gillespie","Ish Smith","Reggie Jackson","Ja Morant","Tyus Jones","Kennedy Chandler","Malik Monk","Keon Ellis","Nate Darling","Landry Shamet","A.J. Lawson","Dereon Seabron","Jaylen Nowell","Mike Conley Jr.","Jordan McLaughlin","Ryan Rollins","Eugene Omoruyi","Johnny Juzang","Damian Lillard","Anfernee Simons","Ryan Arcidiacono","Max Christie","Blake Wesley","Jalen Green","Josh Christopher","Daishen Nix"];
let shootingGuardNumaraları=["13","9","36","11","20","20","1","0","8","9","18","45","10","13","19","9","11","4","5","2","8","14","7","2","2","3","29","23","33","45","22","20","2","12","7","6","0","22","0","2","9","8","7","20","4","50","13","1","3","8","9","23","27","8","27","21","14","91","12","21","1","0","23","30","14","9","0","4","10","6","2","97","33","0","1","51","10","14","4","9","15"];
let shootingGuardTakimlar=["Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Milwaukee Bucks","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Brooklyn Nets","New York Knicks","New York Knicks","New York Knicks","New York Knicks","New York Knicks","Miami Heat","Miami Heat","Miami Heat","Atlanta Hawks","Washington Wizards","Washington Wizards","Toronto Raptors","Toronto Raptors","Toronto Raptors","Toronto Raptors","Toronto Raptors","Chicago Bulls","Chicago Bulls","Chicago Bulls","Chicago Bulls","Chicago Bulls","Chicago Bulls","Indiana Pacers","Indiana Pacers","Indiana Pacers","Indiana Pacers","Indiana Pacers","Orlando Magic","Orlando Magic","Orlando Magic","Orlando Magic","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Detroit Pistons","Detroit Pistons","Denver Nuggets","Denver Nuggets","Denver Nuggets","Denver Nuggets","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Sacramento Kings","Sacramento Kings","Los Angeles Clippers","Phoenix Suns","Dallas Mavericks","New Orleans Pelicans","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Golden State Warriors","Oklahoma City Thunder","Utah Jazz","Portland Trail Blazers","Portland Trail Blazers","Portland Trail Blazers","Los Angeles Lakers","San Antonio Spurs","Houston Rockets","Houston Rockets","Houston Rockets"];

let kisaForvetler=["Grayson Allen","MarJon Beauchamp","Pat Connaughton","Wesley Matthews","Jaylen Brown","Furkan Korkmaz","Danuel House","Jaden Springer","Caris LeVert","Isaac Okoro","Cedi Osman","Lamar Stevens","Dylan Windler","Danny Green","R.J. Barrett","Josh Hart","Quentin Grimes","Evan Fournier","Trevor Keels","Cam Thomas","Mikal Bridges","Joe Harris","David Duke","Nikola Jović","Victor Oladipo","Max Strus","Duncan Robinson","Jamal Cain","Bogdan Bogdanović","AJ Griffin","Tyrese Martin","Garrison Mathews","Donovan Williams","OG Anunoby","Joe Wieskamp","Ron Harper Jr.","Will Barton","Corey Kispert","Jonathan Davis","Buddy Hield","Bennedict Mathurin","Chris Duarte","Kendall Brown","Zach LaVine","Dalen Terry","Javonte Green","Franz Wagner","Gary Harris","Caleb Houstan","Kevon Harris","Kelly Oubre Jr.","Cody Martin","Bryce McGowens","Sviatoslav Mykhailiuk","Alec Burks","Hamidou Diallo","Isaiah Livers","Rodney McGruder","Christian Braun","Kentavious Caldwell-Pope","Peyton Watson","Dillon Brooks","Desmond Bane","Ziaire Williams","Luke Kennard","Vince Williams","John Konchar","Kevin Huerter","Terence Davis","Devin Booker","Damion Lee","Josh Okogie","Terrence Ross","Klay Thompson","Patrick Baldwin Jr.","Moses Moody","Anthony Lamb","Anthony Edwards","Austin Rivers","Matt Ryan","Wendell Moore","Nickeil Alexander-Walker","Tim Hardaway Jr.","Josh Green","Theo Pinson","Justin Holiday","Kawhi Leonard","Paul George","Norman Powell","Terance Mann","Eric Gordon","Brandon Boston Jr.","Amir Coffey","Herb Jones","Dyson Daniels","Naji Marshall","Josh Richardson","Garrett Temple","Talen Horton-Tucker","Ochai Agbaji","Simone Fontecchio","Micah Potter","Austin Reaves","Lonnie Walker IV","Malik Beasley","Davon Reed","Jalen Williams","Luguentz Dort","Aaron Wiggins","Lindy Waters III","Matisse Thybulle","Keon Johnson","Devin Vassell","Malaki Branham","Romeo Langford"];
let kisaForvetNumaralari=["12","0","24","23","7","30","25","11","3","35","16","8","9","14","9","3","6","13","0","24","1","12","6","5","4","31","55","8","13","14","22","25","4","3","15","8","1","24","1","24","00","3","10","8","25","24","22","14","2","7","12","11","7","10","5","6","12","17","0","5","8","24","22","8","10","5","46","9","3","1","10","2","8","11","7","4","40","1","25","37","7","9","11","8","1","0","2","13","24","14","10","4","7","5","11","8","2","41","0","30","16","25","15","4","5","11","8","5","21","12","4","6","24","22","35"];
let kisaForvetTakimlar=["Milwaukee Bucks","Milwaukee Bucks","Milwaukee Bucks","Milwaukee Bucks","Boston Celtics","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","New York Knicks","New York Knicks","New York Knicks","New York Knicks","Brooklyn Nets","Brooklyn Nets","Brooklyn Nets","Brooklyn Nets","Miami Heat","Miami Heat","Miami Heat","Miami Heat","Miami Heat","Atlanta Hawks","Atlanta Hawks","Atlanta Hawks","Atlanta Hawks","Atlanta Hawks","Toronto Raptors","Toronto Raptors","Toronto Raptors","Toronto Raptors","Washington Wizards","Washington Wizards","Indiana Pacers","Indiana Pacers","Indiana Pacers","Indiana Pacers","Chicago Bulls","Chicago Bulls","Chicago Bulls","Orlando Magic","Orlando Magic","Orlando Magic","Orlando Magic","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Detroit Pistons","Detroit Pistons","Detroit Pistons","Detroit Pistons","Denver Nuggets","Denver Nuggets","Denver Nuggets","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Sacramento Kings","Sacramento Kings","Phoenix Suns","Phoenix Suns","Phoenix Suns","Phoenix Suns","Golden State Warriors","Golden State Warriors","Golden State Warriors","Golden State Warriors","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Dallas Mavericks","Dallas Mavericks","Dallas Mavericks","Dallas Mavericks","Los Angeles Clippers","Los Angeles Clippers","Los Angeles Clippers","Los Angeles Clippers","Los Angeles Clippers","Los Angeles Clippers","Los Angeles Clippers","New Orleans Pelicans","New Orleans Pelicans","New Orleans Pelicans","New Orleans Pelicans","New Orleans Pelicans","Utah Jazz","Utah Jazz","Utah Jazz","Utah Jazz","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","Oklahoma City Thunder","Oklahoma City Thunder","Oklahoma City Thunder","Oklahoma City Thunder","Portland Trail Blazers","Portland Trail Blazers","San Antonio Spurs","San Antonio Spurs","San Antonio Spurs"];

let uzunForvetler=["Giannis Antetokounmpo","Khris Middleton","Jae Crowder","Joe Ingles","Bobby Portis","Thanasis Adetokunbo","Meyers Leonard","Jayson Tatum","Al Horford","Blake Griffin","Grant Williams","Sam Hauser","Danilo Gallinari","Joel Embiid","Tobias Harris","P. J. Tucker","Georges Niang","Montrezl Harrell","Paul Reed","Louis King","Jalen McDaniels","Evan Mobley","Dean Wade","Isaiah Mobley","Mamadi Diakite","Julius Randle","Obi Toppin","Yuta Watanabe","Royce O'Neale","Dorian Finney-Smith","Cameron Johnson","Day'Ron Sharpe","Jimmy Butler","Udonis Haslem","Caleb Martin","Orlando Robinson","Haywood Highsmith","Kevin Love","John Collins","De'Andre Hunter","Jalen Johnson","Saddiq Bey","Pascal Siakam","Scottie Barnes","Chris Boucher","Otto Porter","Thaddeus Young","Kyle Kuzma","Kristaps Porziņģis","Deni Avdija","Taj Gibson","Isaiah Todd","Anthony Gill","Jalen Smith","Aaron Nesmith","Daniel Theis","James Johnson","Isaiah Jackson","Jordan Nwora","Oshae Brissett","DeMar DeRozan","Patrick Williams","Derrick Jones Jr.","Terry Taylor","Paolo Banchero","Bol Bol","Jonathan Isaac","Wendell Carter Jr.","Moe Wagner","Admiral Schofield","Chuma Okeke","Gordon Hayward","P. J. Washington","JT Thor","Kai Jones","Bojan Bogdanović","Jalen Duren","Marvin Bagley III","Isaiah Stewart","Michael Porter Jr.","Aaron Gordon","Bruce Brown Jr.","Vlatko Čančar","Zeke Nnaji","Jeff Green","Jack White","Jaren Jackson Jr.","Kenneth Lofton, Jr.","Brandon Clarke","Santi Aldama","Xavier Tillman","David Roddy","Jake LaRavia","Domantas Sabonis","Keegan Murray","Harrison Barnes","Richaun Holmes","Trey Lyles","Chimezie Metu","Kessler Edwards","Kevin Durant","Ish Wainright","T. J. Warren","Torrey Craig","Darius Bazley","Andrew Wiggins","Draymond Green","Jonathan Kuminga","Andre Iguodala","JaMychal Green","Karl-Anthony Towns","Kyle Anderson","Taurean Prince","Josh Minott","Nathan Knight","Jaden McDaniels","Christian Wood","Reggie Bullock","Maxi Kleber","Dāvis Bertāns","Markieff Morris","Marcus Morris","Robert Covington","Nicolas Batum","Moussa Diabaté","Zion Williamson","Brandon Ingram","Trey Murphy III","Larry Nance Jr.","Jaxson Hayes","EJ Liddell","Lauri Markkanen","Walker Kessler","Kelly Olynyk","Rudy Gay","Juan Toscano-Anderson","LeBron James","Anthony Davis","Rui Hachimura","Troy Brown Jr.","Jarred Vanderbilt","Wenyen Gabriel","Cole Swider","Jaylin Williams","Chet Holmgren","Aleksej Pokuševski","Kenrich Williams","Ousmane Dieng","Jeremiah Robinson-Earl","Dario Šarić","Jerami Grant","Shaedon Sharpe","Drew Eubanks","Cam Reddish","Justise Winslow","Jabari Walker","Nassir Little","Trendon Watford","Kevin Knox II","Jeremy Sochan","Keldon Johnson","Zach Collins","Doug McDermott","Charles Bassey","Keita Bates-Diop","Dominick Barlow","Sandro Mamukelashvili","Jabari Smith Jr.","Kenyon Martin Jr.","Tari Eason","Jae'Sean Tate","Usman Garuba","Darius Days","Willie Cauley-Stein"];
let uzunForvetNumaralari=["34","22","99","7","9","43","3","0","42","91","12","30","8","21","12","17","20","5","44","23","7","4","32","15","21","30","1","18","00","28","2","20","22","40","16","25","24","42","20","12","1","9","43","4","25","32","21","33","6","9","67","14","16","25","23","27","16","22","13","12","11","44","5","32","5","10","1","34","21","25","3","20","25","21","23","44","0","35","28","1","50","11","31","22","32","10","13","6","15","7","2","27","3","10","13","40","22","41","7","17","35","12","21","0","55","22","23","00","9","1","32","5","12","8","13","3","35","25","42","44","13","8","23","33","25","1","14","25","22","10","32","23","24","41","22","95","6","3","28","7","2","35","20","6","7","17","34","13","50","9","9","17","24","5","26","34","10","2","11","10","3","23","17","28","31","22","54","1","6","17","8","16","5","2"];
let uzunForvetTakimlar=["Milwaukee Bucks","Milwaukee Bucks","Milwaukee Bucks","Milwaukee Bucks","Milwaukee Bucks","Milwaukee Bucks","Milwaukee Bucks","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Philadelphia 76ers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","Cleveland Cavaliers","New York Knicks","New York Knicks","Brooklyn Nets","Brooklyn Nets","Brooklyn Nets","Brooklyn Nets","Brooklyn Nets","Miami Heat","Miami Heat","Miami Heat","Miami Heat","Miami Heat","Miami Heat","Atlanta Hawks","Atlanta Hawks","Atlanta Hawks","Atlanta Hawks","Toronto Raptors","Toronto Raptors","Toronto Raptors","Toronto Raptors","Toronto Raptors","Washington Wizards","Washington Wizards","Washington Wizards","Washington Wizards","Washington Wizards","Washington Wizards","Indiana Pacers","Indiana Pacers","Indiana Pacers","Indiana Pacers","Indiana Pacers","Indiana Pacers","Indiana Pacers","Chicago Bulls","Chicago Bulls","Chicago Bulls","Chicago Bulls","Orlando Magic","Orlando Magic","Orlando Magic","Orlando Magic","Orlando Magic","Orlando Magic","Orlando Magic","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Charlotte Hornets","Detroit Pistons","Detroit Pistons","Detroit Pistons","Detroit Pistons","Denver Nuggets","Denver Nuggets","Denver Nuggets","Denver Nuggets","Denver Nuggets","Denver Nuggets","Denver Nuggets","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Memphis Grizzlies","Sacramento Kings","Sacramento Kings","Sacramento Kings","Sacramento Kings","Sacramento Kings","Sacramento Kings","Sacramento Kings","Phoenix Suns","Phoenix Suns","Phoenix Suns","Phoenix Suns","Phoenix Suns","Golden State Warriors","Golden State Warriors","Golden State Warriors","Golden State Warriors","Golden State Warriors","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Dallas Mavericks","Dallas Mavericks","Dallas Mavericks","Dallas Mavericks","Dallas Mavericks","Los Angeles Clippers","Los Angeles Clippers","Los Angeles Clippers","Los Angeles Clippers","New Orleans Pelicans","New Orleans Pelicans","New Orleans Pelicans","New Orleans Pelicans","New Orleans Pelicans","New Orleans Pelicans","Utah Jazz","Utah Jazz","Utah Jazz","Utah Jazz","Utah Jazz","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","Los Angeles Lakers","Oklahoma City Thunder","Oklahoma City Thunder","Oklahoma City Thunder","Oklahoma City Thunder","Oklahoma City Thunder","Oklahoma City Thunder","Oklahoma City Thunder","Portland Trail Blazers","Portland Trail Blazers","Portland Trail Blazers","Portland Trail Blazers","Portland Trail Blazers","Portland Trail Blazers","Portland Trail Blazers","Portland Trail Blazers","Portland Trail Blazers","San Antonio Spurs","San Antonio Spurs","San Antonio Spurs","San Antonio Spurs","San Antonio Spurs","San Antonio Spurs","San Antonio Spurs","San Antonio Spurs","Houston Rockets","Houston Rockets","Houston Rockets","Houston Rockets","Houston Rockets","Houston Rockets","Houston Rockets"];

let pivotlar=["Brook Lopez","Robert Williams III","Luke Kornet","Mike Muscala","Mfiondu Kabengele","Dewayne Dedmon","Jarrett Allen","Robin Lopez","Mitchell Robinson","Isaiah Hartenstein","Jericho Sims","Nic Claxton","Bam Adebayo","Ömer Faruk Yurtseven","Cody Zeller","Clint Capela","Onyeka Okongwu","Bruno Fernando","Jakob Pöltl","Christian Koloko","Precious Achiuwa","Daniel Gafford","Jay Huff","Nikola Vučević","Andre Drummond","Marko Simonović","Myles Turner","Goga Bitadze","Mark Williams","Nick Richards","James Wiseman","Nerlens Noel","Nikola Jokić","DeAndre Jordan","Thomas Bryant","Steven Adams","Alex Len","Neemias Queta","Deandre Ayton","Jock Landale","Bismack Biyombo","Kevon Looney","Rudy Gobert","Luka Garza","Naz Reid","Dwight Powell","JaVale McGee","Ivica Zubac","Mason Plumlee","Udoka Azubuike","Damian Jones","Jusuf Nurkić","Ibou Badji","John Butler Jr.","Mo Bamba","Jonas Valančiūnas","Willy Hernangómez","Olivier Sarr","Gorgui Dieng","Khem Birch","Alperen Şengün","Boban Marjanović","Frank Kaminsky"];
let pivotNumaralari=["11","44","40","57","28","14","31","33","23","55","45","33","13","77","44","15","17","24","19","35","5","21","41","9","3","19","33","35","5","4","13","9","15","9","13","4","25","88","22","11","18","5","27","55","11","7","00","40","44","20","15","27","41","21","12","17","9","30","41","92","28","51","33"];
let pivotTakimlari=["Milwaukee Bucks","Boston Celtics","Boston Celtics","Boston Celtics","Boston Celtics","Philadelphia 76ers","Cleveland Cavaliers","Cleveland Cavaliers","New York Knicks","New York Knicks","New York Knicks","Brooklyn Nets","Miami Heat","Miami Heat","Miami Heat","Atlanta Hawks","Atlanta Hawks","Atlanta Hawks","Toronto Raptors","Toronto Raptors","Toronto Raptors","Washington Wizards","Washington Wizards","Chicago Bulls","Chicago Bulls","Chicago Bulls","Indiana Pacers","Orlando Magic","Charlotte Hornets","Charlotte Hornets","Detroit Pistons","Detroit Pistons","Denver Nuggets","Denver Nuggets","Denver Nuggets","Memphis Grizzlies","Sacramento Kings","Sacramento Kings","Phoenix Suns","Phoenix Suns","Phoenix Suns","Golden State Warriors","Minnesota Timberwolves","Minnesota Timberwolves","Minnesota Timberwolves","Dallas Mavericks","Dallas Mavericks","Los Angeles Clippers","Los Angeles Clippers","Utah Jazz","Utah Jazz","Portland Trail Blazers","Portland Trail Blazers","Portland Trail Blazers","Los Angeles Lakers","New Orleans Pelicans","New Orleans Pelicans","Oklahoma City Thunder","San Antonio Spurs","San Antonio Spurs","Houston Rockets","Houston Rockets","Houston Rockets"];

const button=document.getElementById("btnDegistir");
const oyunKurucu=document.getElementById("oyunKurucu");
const oyunKurucuNumara=document.getElementById("oyunKurucuNumara");
const oyunKurucuTakim=document.getElementById("oyunKurucuTakim");
const oyunKurucuResim=document.getElementById("oyunKurucuResim");

const shootingGuard=document.getElementById("shootingGuard");
const shootingGuardNumara=document.getElementById("shootingGuardNumara");
const shootingGuardTakim=document.getElementById("shootingGuardTakim");

const kisaForvet=document.getElementById("kisaForvet");
const kisaForvetNumara=document.getElementById("kisaForvetNumara");
const kisaForvetTakim=document.getElementById("kisaForvetTakim");

const uzunForvet=document.getElementById("uzunForvet");
const uzunForvetNumara=document.getElementById("uzunForvetNumara");
const uzunForvetTakim=document.getElementById("uzunForvetTakim");

const pivot=document.getElementById("pivot");
const pivotNumara=document.getElementById("pivotNumara");
const pivotTakim=document.getElementById("pivotTakim");

let sayi1=Math.floor(Math.random()*122);
oyunKurucu.innerHTML=oyunKurucular[sayi1];
console.log(sayi1);
console.log(oyunKurucu);
oyunKurucuNumara.innerHTML=oyunKurucuNumaraları[sayi1];
console.log(sayi1);
console.log(oyunKurucuNumara);
oyunKurucuTakim.innerHTML=oyunKurucuTakimlar[sayi1];
console.log(sayi1);
console.log(oyunKurucuTakim);
oyunKurucuResim.setAttribute("src",oyunKurucuResimler[sayi1]);

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

let sayi3=Math.floor(Math.random()*113);
kisaForvet.innerHTML=kisaForvetler[sayi3];
console.log(sayi3);
console.log(kisaForvet);
kisaForvetNumara.innerHTML=kisaForvetNumaralari[sayi3];
console.log(sayi3);
console.log(kisaForvetNumara);
kisaForvetTakim.innerHTML=kisaForvetTakimlar[sayi3];
console.log(sayi3);
console.log(kisaForvetTakim);

let sayi4=Math.floor(Math.random()*174);
uzunForvet.innerHTML=uzunForvetler[sayi4];
console.log(sayi4);
console.log(uzunForvet);
uzunForvetNumara.innerHTML=uzunForvetNumaralari[sayi4];
console.log(sayi4);
console.log(uzunForvetNumara);
uzunForvetTakim.innerHTML=uzunForvetTakimlar[sayi4];
console.log(sayi4);
console.log(uzunForvetTakim);

let sayi5=Math.floor(Math.random()*62);
pivot.innerHTML=pivotlar[sayi5];
console.log(sayi5);
console.log(pivot);
pivotNumara.innerHTML=pivotNumaralari[sayi5];
console.log(sayi5);
console.log(pivotNumara);
pivotTakim.innerHTML=pivotTakimlari[sayi5];
console.log(sayi5);
console.log(pivotTakim);

button.addEventListener("click", ()=>{
    let sayi1=Math.floor(Math.random()*122);
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

    let sayi3=Math.floor(Math.random()*113);
    kisaForvet.innerHTML=kisaForvetler[sayi3];
    console.log(sayi3);
    console.log(kisaForvet);
    kisaForvetNumara.innerHTML=kisaForvetNumaralari[sayi3];
    console.log(sayi3);
    console.log(kisaForvetNumara);
    kisaForvetTakim.innerHTML=kisaForvetTakimlar[sayi3];
    console.log(sayi3);
    console.log(kisaForvetTakim);

    let sayi4=Math.floor(Math.random()*174);
    uzunForvet.innerHTML=uzunForvetler[sayi4];
    console.log(sayi4);
    console.log(uzunForvet);
    uzunForvetNumara.innerHTML=uzunForvetNumaralari[sayi4];
    console.log(sayi4);
    console.log(uzunForvetNumara);
    uzunForvetTakim.innerHTML=uzunForvetTakimlar[sayi4];
    console.log(sayi4);
    console.log(uzunForvetTakim);

    let sayi5=Math.floor(Math.random()*62);
    pivot.innerHTML=pivotlar[sayi5];
    console.log(sayi5);
    console.log(pivot);
    pivotNumara.innerHTML=pivotNumaralari[sayi5];
    console.log(sayi5);
    console.log(pivotNumara);
    pivotTakim.innerHTML=pivotTakimlari[sayi5];
    console.log(sayi5);
    console.log(pivotTakim);
});
