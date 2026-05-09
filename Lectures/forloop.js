// Team Members:
// Richard Rivera
// Krishnaveni
// Jinling Peng
// Jeremy Montrose
// Fredy Chilito

// Write while loops to accomplish the following tasks:

cosole.log(`Count down to 0 from a given number.`)
for(let i = 6; i>=0; i--)
    { console.log(i);

    }
cosole.log(`Log integers in multiples of 3 as long as they are less than 35.`)
for(let i = 3; i<35; i += 3)
    { console.log(i);
        
    }
cosole.log(`Print integers in multiples of 5 as long as they are less than 100.`)
for(let i = 5; i<100; i += 5)
     { console.log(i);
        
    }

cosole.log(`Print integers between 0 and 20 with the following conditions:\n

All numbers divisible by 2 should be multiplied by 3 before they are output.\n
All other integers should not be output.\n
Print all prime numbers between 0 and 20.\n`)

let m = 3;

for(let i = 0; i<=20; i++) {
     if (i % 2 === 0)
        
    console.log(i, i * m);
}

// Bonus Logical Question
// Romeo went to the vending machine to buy himself a cookie, 
// which costs $4. He paid with a $10 bill, and the vending machine gave him 
// his change in quarters.
// Write a loop that outputs how many quarters Romeo received.