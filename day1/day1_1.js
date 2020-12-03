const data = require('./data');

(() => {
    for(let i = 0; i < data.length - 1; i++) {
      for(let y = i+1; y < data.length; y++) {
        if(data[i] + data[y] == 2020) {
          const one = data[i];
          const two = data[y];
          console.log(`Found ${one} and ${two} on positions ${i} and ${y}. ${one}*${two}=${one*two}`);
          return;
        }
      }
    }
})();