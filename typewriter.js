const typewriter = function(sentence) {
  let delay = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (i === sentence.length - 1) {
      setTimeout(() => {
        process.stdout.write(sentence[i]);
        console.log();
      }, delay);
    } else {
      setTimeout(() => {
        process.stdout.write(sentence[i]);
      }, delay);
      delay += 100;
    }
  }
};
typewriter('hello there from lighthouse labs');