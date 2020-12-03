const data = require('./data');

(() => {
    for(let i = 0; i < data.length - 2; i++) {
      for(let y = i+1; y < data.length - 1; y++) {
        for(let z = y+1; z < data.length; z++) {
            if(data[i] + data[y] + data[z] == 2020) {
                const one = data[i];
                const two = data[y];
                const three = data[z];
                console.log(`Found ${one}, ${two} and ${three} on positions ${i}, ${y} and ${y+1}. ${one}*${two}*${three}=${one*two*three}`);
                return;
            }
        }
      }
    }
})();