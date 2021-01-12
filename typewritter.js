const sentence = `Hello there from Lighthouse Labs\n`;
let seconds=1;

const type = function(str, seconds ){
  let time=0;
  for (const char of str) {
    // process.stdout.write(char);
    seconds++;
    time = seconds * 100;
    setTimeout(function() {
      process.stdout.write(char);
    },time)
  }
}

type(sentence, seconds)