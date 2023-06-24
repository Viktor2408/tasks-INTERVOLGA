$(function() {
    $.mask.definitions['z'] = "[абвгдеёжзийклмнопрстуфхцчшщьыъэюя]";
    $("#gosNumber").mask("z999zz 999");
    $("#series").mask("99 99");
    $("#number").mask("999 999");
    $("#whenIssued").mask("99.99.9999");
  });
