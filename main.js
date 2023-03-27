console.log('entro controlador');

function onlynumbers(val) {
  console.log(val)
  var reg = new RegExp('^[0-9]$');
  
  if (reg.test(hash))
    return true;
  
  return false;
}
