
function variationExample(sentence) {
  let output = document.querySelector('#variation-exp');
  let newSentence = sentence;

  /*
  * we're padding the thing we want to replace to ensure we are capturing
  * just the word and not parts of other words e.g we want `he` and not
  * the `he` part of t`he`
  */


  output.innerHTML = newSentence;
}

function variationOne(sentence) {
  let output = document.querySelector('#variation-one');
  let newSentence = sentence;
  let newWords = [];
  let swapWords = {
    end: "beginning",
    the: "what looked like a",
    a: "someone's", // why don't symbols work?


  }

  let words = newSentence.split(' '); //why is this (' ') necessary?
  for (i = 0; i < words.length; i++) { // what is all this talk of i
    if (words[i] in swapWords) {
      newWords.push(swapWords[words[i]]);

      //console.log('yes');

    }
    else {
      newWords.push(words[i]);

    }

  }

  newSentence = newWords.join(' ');

  output.innerHTML = newSentence;
}

function variationTwo(sentence) {
  let output = document.querySelector('#variation-two');
  let newSentence = sentence;

  // modify the sentence
  newSentence = newSentence.replace('a', 'aaaa');
  newSentence = newSentence.replace('b', 'bbbb');
  newSentence = newSentence.replace('c', 'cccc');
  newSentence = newSentence.replace('d', 'dddd');
  newSentence = newSentence.replace('e', 'eeee');
  newSentence = newSentence.replace('f', 'ffff');
  newSentence = newSentence.replace('g', 'gggg');
  newSentence = newSentence.replace('h', 'hhhh');
  newSentence = newSentence.replace('i', 'iiii');
  newSentence = newSentence.replace('j', 'jjjj');
  newSentence = newSentence.replace('k', 'kkkk');
  newSentence = newSentence.replace('l', 'llll');
  newSentence = newSentence.replace('m', 'mmmm');
  newSentence = newSentence.replace('n', 'nnnn');
  newSentence = newSentence.replace('o', 'oooo');
  newSentence = newSentence.replace('p', 'pppp');
  newSentence = newSentence.replace('q', 'qqqq');
  newSentence = newSentence.replace('r', 'rrrr');
  newSentence = newSentence.replace('s', 'ssss');
  newSentence = newSentence.replace('t', 'tttt');
  newSentence = newSentence.replace('u', 'uuuu');
  newSentence = newSentence.replace('v', 'vvvv');
  newSentence = newSentence.replace('w', 'wwww');
  newSentence = newSentence.replace('x', 'xxxx');
  newSentence = newSentence.replace('y', 'yyyy');
  newSentence = newSentence.replace('z', 'zzzz');
  newSentence = newSentence.replace('.', '!');
  newSentence = newSentence.replace('?', '!');


  output.innerHTML = newSentence;
}

function variationThree(sentence) {
  let output = document.querySelector('#variation-three');
  let newSentence = sentence;

  // modify the sentence
  newSentence = newSentence.replace(',', ' (will anything  change) ');
  newSentence = newSentence.replace('!', ' (nothing really ends). ');
  newSentence = newSentence.replace('?', " (you're left to figure things out on your own). ");
  newSentence = newSentence.replace('.', ' (it could have been real). ');
  newSentence = newSentence.replace(';', " (the story isn't over) ");
  newSentence = newSentence.replace('...', ' (much was left unsaid). ');
  newSentence = newSentence.replace("'s", " (this was the last chance) ");
  newSentence = newSentence.replace("'re", ' (the wind picked up). ');


  output.innerHTML = newSentence;
}



let input = document.querySelector('#sentence');

// recomput when the input text changes
input.addEventListener('input', function () {
  let sentence = input.value;
  variationExample(sentence);
  variationOne(sentence);
  variationTwo(sentence);
  variationThree(sentence);
});

// also comput when the page loads
variationExample(input.value);
variationOne(input.value);
variationTwo(input.value);
variationThree(input.value);
