/*
free Code Camp - Caesars Cipher exercise

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character
(i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {

 var tester = str.split("");

 for(var i=0; i<tester.length; i++) {
   var current = tester[i];

   if (current <65 || current >90){
     tester[i] = current;
     } else {
         var test = tester[i].charCodeAt(0);
         if (test >= 65 && test <= 77){
         tester[i] =  String.fromCharCode(test + 13);
         }

         if (test >= 78 && test <= 90){
         tester[i] =  String.fromCharCode(test - 13);
         }
       }
  }

 return tester.join("");

}

// Change the inputs below to test
rot13("SERR CVMMN!");
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.");
rot13("LBH QVQ VG!");
