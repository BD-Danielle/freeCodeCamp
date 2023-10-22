function mutation(arr) {
  var item1 = arr[0].toLowerCase();
  var item2 = arr[1].toLowerCase();

  for (var i = 0; i < item2.length; i++) {
    var match = item1.indexOf(item2[i]);

    if (match === -1) {
      return false;
    }
  }

  return true;
}

mutation(["hello", "hey"]);