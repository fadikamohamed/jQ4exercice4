$(function() {
  //Déclaration de régex et intégration dans des variables
  var regexName = /^[a-zA-Z'àâäçéèêëîïôöùûüÀÂÄÇÉÈÊËÎÏÔÖÙÛÜ \-]+$/;
  var regexBirthDate = /^([\d]|[1-2][\d]|(30|31))(,|.|\/)([1-9]|(10|11|12))(,|.|\/)((19|20)[\d]{2})$/;
  var regexPlace = /^[\w',.àâäçéèêëîïôöùûüÀÂÄÇÉÈÊËÎÏÔÖÙÛÜ \/\-]+$/;
  //Déclenchement de l'évenement au clic sur le bouton valider
  $('#submit').click(function() {
    //Intégration des valeurs des champs dans des variables
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var birthDate = $('#birthDate').val();
    var birthPlace = $('#birthPlace').val();
    var job = $('#job').val();
    var workplace = $('#workplace').val();
    //Teste de la valeur avec le regex. Si true ...
    if (regexName.test(firstname)) {
      //Afficher une bordure verte
      $('#firstname').css('border', '2px green solid');
      //Sinon...
    } else {
      //Afficher une bordure rouge
      $('#firstname').css('border', '2px red solid');
    }
    //Teste de la valeur avec le regex. Si true ...
    if (regexName.test(lastname)) {
      //Afficher une bordure verte
      $('#lastname').css('border', '2px green solid');
      //Sinon...
    } else {
      //Afficher une bordure rouge
      $('#lastname').css('border', '2px red solid');
    }
    //Teste de la valeur avec le regex. Si true ...
    if (regexBirthDate.test(birthDate)) {
      //Afficher une bordure verte
      $('#birthDate').css('border', '2px green solid');
      //Sinon...
    } else {
      //Afficher une bordure rouge
      $('#birthDate').css('border', '2px red solid');
    }
    //Teste de la valeur avec le regex. Si true ...
    if (regexPlace.test(birthPlace)) {
      //Afficher une bordure verte
      $('#birthPlace').css('border', '2px green solid');
      //Sinon...
    } else {
      //Afficher une bordure rouge
      $('#birthPlace').css('border', '2px red solid');
    }
    //Teste de la valeur avec le regex. Si true ...
    if (regexName.test(job)) {
      //Afficher une bordure verte
      $('#job').css('border', '2px green solid');
      //Sinon...
    } else {
      //Afficher une bordure rouge
      $('#job').css('border', '2px red solid');
    }
    //Teste de la valeur avec le regex. Si true ...
    if (regexPlace.test(workplace)) {
      //Afficher une bordure verte
      $('#workplace').css('border', '2px green solid');
      //Sinon...
    } else {
      //Afficher une bordure rouge
      $('#workplace').css('border', '2px red solid');
    }
    //Phrase de présentation
    $('#presentation').text(firstname + ' ' + lastname + ', né le ' + birthDate + ', à ' + birthPlace + ', ' + job + ', à ' + workplace + '.' );
  })
});
