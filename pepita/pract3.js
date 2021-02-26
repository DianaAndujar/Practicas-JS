let dipre = prompt("uno");
parseInt(dipre);
let estevez = prompt("dos");
parseInt(estevez);
let barrientos = prompt("tres");
parseInt(barrientos);
if((dipre == estevez) && (estevez == barrientos))
{
    document.writeln("la misma");
}
else if(dipre > estevez && dipre>barrientos)
{
  document.writeln(dipre + "dique mayor");
}
else if (estevez > dipre && estevez > dipre)
{
 document.writeln(estevez + "dique mayor");
}
else if(barrientos > estevez && barrientos > dipre)
{
  document.writeln(barrientos + "dique mayor");
}
