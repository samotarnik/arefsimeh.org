function tweetsProcessing(ta) {
  var currDateNum = currentDateNumber();
  var dateRegEx = /\d+\/\d+\/\d+/;
  var tweetDate;

  for (var i=0; i < ta.length; i++) {
    tweetDate = ta[i].match(dateRegEx);

    if (tweetDate != null) {
      tweetDateNum = tweetDateNumber(tweetDate);
      if ((currDateNum - tweetDateNum) >= 0) {
        ta.splice(i,1);
        i--;
      }
    }
    else {
      ta.splice(i,1);
      i--;
    }
  }
}

function normalizedNumberString(number) {
  var str = number.toString();
  if (str.length === 1) {
    return "0" + str;
  }
  else {
    return str;
  }
}

function currentDateNumber() {
  var date = new Date();
  var y = date.getUTCFullYear().toString()
  var m = date.getMonth() + 1;
  var d = date.getDate();

  date = y + normalizedNumberString(m) + normalizedNumberString(d);
  return parseInt(date,10);
}

function tweetDateNumber(td) {
  var dmyArray = td[0].match(/\d+/g);
  var dateStr = dmyArray[2] + dmyArray[1] + dmyArray[0];
  return parseInt(dateStr, 10);
}



