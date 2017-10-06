$(document).ready(function() {


  $('h1').css('color', 'rgb(255,0,0)');

  $('#toggleProfile').click(function() {
    $('.profile').toggle();
  })

  $('.traits1').hide();
  $('#toggleTraits1').click(function() {
    $('.traits1').toggle();
  })

  $('.attributes').hide();
  $('#toggleAttributes').click(function() {
    $('.attributes').toggle();
  })

  $('.hpAndCon').hide();
  $('#toggleHpAndCon').click(function() {
    $('.hpAndCon').toggle();
  })

  $('.armorClass').hide();
  $('#toggleArmorClass').click(function() {
    $('.armorClass').toggle();
  })

  $('.combat').hide();
  $('#toggleCombat').click(function() {
    $('.combat').toggle();
  })

  $('.grapple').hide();
  $('#toggleGrapple').click(function() {
    $('.grapple').toggle();
  })

  $('.savingThrows').hide();
  $('#toggleSavingThrows').click(function() {
    $('.savingThrows').toggle();
  })

  $('.gear').hide();
  $('#toggleGear').click(function() {
    $('.gear').toggle();
  })

  $('.money').hide();
  $('#toggleMoney').click(function() {
    $('.money').toggle();
  })

  $('.languages').hide();
  $('#toggleLanguages').click(function() {
    $('.languages').toggle();
  })

  $('.equipment').hide();
  $('#toggleEquipment').click(function() {
    $('.equipment').toggle();
  })

  $('.carry').hide();
  $('#toggleCarry').click(function() {
    $('.carry').toggle();
  })

  $('.lift').hide();
  $('#toggleLift').click(function() {
    $('.lift').toggle();
  })

})
