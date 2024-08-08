function resetNeeded(sifreler) {
  var uygunOlmayanSifreler = [];

  sifreler.forEach(function (sifre) {
    if (sifre.length < 8) {
      uygunOlmayanSifreler.push(sifre);
      return;
    }

    var buyukHarfVarMi = false;
    for (var i = 0; i < sifre.length; i++) {
      if (sifre[i] >= 'A' && sifre[i] <= 'Z') {
        buyukHarfVarMi = true;
        break;
      }
    }
    if (!buyukHarfVarMi) {
      uygunOlmayanSifreler.push(sifre);
      return;
    }

    var kucukHarfVarMi = false;
    for (var i = 0; i < sifre.length; i++) {
      if (sifre[i] >= 'a' && sifre[i] <= 'z') {
        kucukHarfVarMi = true;
        break;
      }
    }
    if (!kucukHarfVarMi) {
      uygunOlmayanSifreler.push(sifre);
      return;
    }
  });

  return uygunOlmayanSifreler;
}
