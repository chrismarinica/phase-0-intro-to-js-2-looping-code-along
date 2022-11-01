const firstName = ['Guadalupe', 'Ollie', 'Aki'];
const event = 'surprise';

function writeCards(firstName,event){
    let message = []
      for(let i = 0; i < firstName.length; i++) {
        message.push(`Thank you, ${firstName[i]}, for the wonderful ${event} gift!`);
      }  
return message;
}

function countDown(num){
    while(num >= 0){
        console.log(num);
        num--
    }
}
[countDown()];

