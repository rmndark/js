var s=[
"http://satoshinow.com/?ref=12474",
"http://satoshiclaim.com/?ref=118713",
"http://biobtc.net/?ui=3636",
"http://monsterbtc.net/?ui=80582",
"http://peoplebtc.net/?ui=1088",
"http://www.btcfixer.com/?r=1Kj9hMyFNrYRMn2ndYNXNBphdgfnHxr9TC",
"http://www.siizo.com/?r=1Kj9hMyFNrYRMn2ndYNXNBphdgfnHxr9TC",
"http://mili.io/?r=1Kj9hMyFNrYRMn2ndYNXNBphdgfnHxr9TC",
"http://www.howto-get-coins.info/faucets/btc/?r=1Kj9hMyFNrYRMn2ndYNXNBphdgfnHxr9TC",
"http://gemmaco.eu/?ref=1992346",
"http://bitorion.com/?ref=890178",
"http://usdfaucet.com/?ref=900156",
"http://worldofbitco.in",
"http://elenafaucets.com/freebitcoin03/?ref=1Kj9hMyFNrYRMn2ndYNXNBphdgfnHxr9TC",
"http://claimbtc.com/?r=943bce55e5",
"http://easybitcoinfaucet.com/?r=0084919259",
"http://topfan.info/?r=1Kj9hMyFNrYRMn2ndYNXNBphdgfnHxr9TC",
"http://timeforbitco.in/55787",
"http://goo.gl/xzLLUo",
"http://bagbitcoin.com/?r=39801",
"http://bagsatoshi.com/?r=36555",
"http://carbitcoin.com/?r=29867",
"http://www.faucethouse.com/?r=14414",
"http://www.bitcoinocean.org/?r=43241",
"http://bitorion.com/?ref=890178",
"http://gemmaco.eu/?ref=1992346",
"http://www.btcfixer.com/?r=1Kj9hMyFNrYRMn2ndYNXNBphdgfnHxr9TC",
"http://www.siizo.com/?r=1Kj9hMyFNrYRMn2ndYNXNBphdgfnHxr9TC",
"http://mili.io/?r=1Kj9hMyFNrYRMn2ndYNXNBphdgfnHxr9TC",
"http://chronox.co.in/98080",
"http://sunbtc.space/65780",
"http://weatherx.co.in/5782",
"http://getyourbitco.in/88155",
"http://freesatoshi.com/?id=2429514",
"https://www.ganabitsdiarios.com/?r=rmn673@gmail.com",
"http://gentlebitcoin.eu/?r=rmn673@gmail.com",
"https://www.facilbits.com/?r=rmn673@gmail.com",
"http://fieldbitcoins.com/?ref=fp8fegs8252851",
"http://satoshinow.com/?ref=12474",
"http://satoshiclaim.com/?ref=118713",
"http://gemmaco.eu/?ref=1992346",
"http://bitorion.com/?ref=890178",
"http://www.faucethouse.com/?r=14414",
"http://www.bitcoinocean.org/?r=43241",
"http://www.howto-get-coins.info/faucets/btc/?r=1Kj9hMyFNrYRMn2ndYNXNBphdgfnHxr9TC",
"http://worldofbitco.in/",
"http://boxbit.co.in/?ref=1Kj9hMyFNrYRMn2ndYNXNBphdgfnHxr9TC",
"http://fieldofbitcoin.com/?r=51732C",
"http://refbitcoin.com/index.php?ref=rmn673",
"http://donaldcoin.com/index.php?ref=rmn673",
"http://henbtc.com/index.php?ref=rmn673",
"http://101dogs.net/index.php?ref=rmn673",
"http://topfan.info/?r=1Kj9hMyFNrYRMn2ndYNXNBphdgfnHxr9TC",
"http://battlebit.co.in/?ref=rmn673",
"http://gemmaco.eu/?ref=1992346",
"http://centofaucet.com/?ref=u9df23z5nie7"
];
var adr,i,x=0,c=s.length;
function address() {
adr=prompt('Enter your bitcoin address:');
s=s.map(function(x){
  return x.indexOf("a=") != -1 ? x + adr : x; 
});
}
function next(){
x+=1;
if (x>c-1)
  {
  x=0;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<=0)
  {
  x=c-1;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter a number to skip to that faucet.");
x=0;
while (i!=x) {
  if (x>c-2) {
  break;
  }
  x+=1;
}
changeSrc();
}
function newTab() {
var win=window.open(document.getElementById("fm").src, '_blank');
win.focus();
}
function changeSrc() {
document.getElementById("fm").src=s[x];
}
