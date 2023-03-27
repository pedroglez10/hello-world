console.log('entro controlador');

function onlynumbers(val) {
  var reg = new RegExp('^[0-9]$');
  console.log(reg.test(val));
  if (reg.test(hash))
    return true;
  
  return false;
}
