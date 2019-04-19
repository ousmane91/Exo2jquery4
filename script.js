$(function(){
//LA FONCTION POUR ENVOYER LA NOTE
$('#send').click(function(){
  //LES VARIABLE QUI CORRESPONDES AUX VALEUR A RECUPERER
  var lastname = $('#lastname').val();
  var firstname = $('#firstname').val();
  var note1 = parseFloat($('#one').val());
  var note2 = parseFloat($('#two').val());
  var note3 = parseFloat($('#three').val());
  var note4 = parseFloat($('#four').val());
  var note5 = parseFloat($('#five').val());
  var total = ((note1 + note2 + note3 + note4 + note5) / 5);
//LA CONDITION POUR LES DIFFÉRENTS RESULATS OBTENUE
if(total >= 0 && total < 10){
swal.fire('En dessous de la moyenne' + total);
}
if(total >= 10 && total < 13){
swal.fire('Moyen' + total);
}
if(total >= 13 && total < 16){
swal.fire('Bien' + total);
}
if(total >= 16 && total < 20){
swal.fire('Très bien' + total);
}
if(total == 20){
swal.fire('Excellent' + total);
}


});








});
