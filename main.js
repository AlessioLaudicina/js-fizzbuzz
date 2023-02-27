
/* 
- un programma che stampi in console i numeri da 1 a 100,
- ma che per i multipli di 3 stampi “Fizz” al posto del numero 
- e per i multipli di 5 stampi “Buzz”.
- Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. 
*/



const containerDom = document.querySelector('.container');


for ( let i = 1; i <= 100; i++ ) {
    const box = document.createElement('div')
    box.classList.add('box')

    if( i % 15 == 0) {
        console.log('FrizzBuzz');
        box.classList.add('box-fizzbuzz');
        box.append('FrizzBuzz');
    }

     else if( i % 3 == 0){
        console.log('Frizzy')
        box.classList.add('box-fizz');
        box.append('Frizz');
    }

    else if( i % 5 == 0){
        console.log('Buzz')
        box.classList.add('box-buzz');
        box.append('Buzz');

    }

    else{
        console.log(i)
        box.append(i);

    }

    containerDom.append(box)

}




