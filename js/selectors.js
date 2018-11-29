// declare your functions here...

function paragraphSelector(){
  return $('p');
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  return $('#baby-ninja');
}

function divSelector() {
  return $('.pics');
}

function firstListItem () {
  var tmp = $("#pic-list:first-child");
  return tmp;
  //return tmp[0].firstElementChild.innerHTML;
}
