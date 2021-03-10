
var btnGenerator = document.getElementById('genera');
var btnCancel = document.getElementById('annulla');
var price = 0.21;
var totalPrice = 0;
var tariff = 'Prezzo pieno';


btnGenerator.addEventListener('click', function(){
   var nameC =  document.getElementById('name').value;
   
   var distance = parseInt(document.getElementById('distance').value); 
  
   var age =  document.getElementById('age').value; 

   if (nameC !== '' && distance > 0 && age !== '') {
        
        totalPrice = price * distance;

        console.log(totalPrice)
        if ( age == 1){
            console.log('minorenne', age);
            var sconto = totalPrice * 0.2;
            totalPrice = totalPrice - sconto;
            tariff += ' con lo sconto del 20%';
        } else if (age == 3){
            console.log('over65', age)
            var sconto = totalPrice * 0.4;
            totalPrice = totalPrice - sconto;
            tariff += ' con lo sconto del 40%';

        }

/* blocco else if per applicazione sconto
 */
    parseFloat(document.getElementById('totalPrice').innerHTML = totalPrice);
    var cp = Math.floor(Math.random() * 10000) +90000 ;
        document.getElementById('codCp').innerHTML = cp

    var carriage = Math.floor(Math.random() * 40) + 1 ;
        document.getElementById('carriage').innerHTML = carriage

    document.getElementById('tariff').innerHTML = tariff;
    document.getElementById('client').innerHTML = nameC;
    
    

   }else{
    console.log('no');

   }

});

btnCancel.addEventListener('click', function(){
   var cancel = document.getElementById('annulla').value;
});

