/*Input : str1 = "bcadeh" str2 = "hea"
Output: 3
We need to remove b, c and d from str1.
*/

//complessità O(n)
function count_anagram(str1, str2){
  if(!str1 || !str2)
    return;

  var occ_str1 = {},
      occ_str2 = {},
      CHARS = 'abcdefghijklmnopqrstuvwxyz'.split(''), //numero caratteri alfabeto
      result = 0,
      i;

  //salvo array di occorrenze per stringa1
  for(i = 0; i < str1.length; i++){
    occ_str1[str1[i]] = occ_str1[str1[i]] ? (occ_str1[str1[i]] + 1) : 1;
  }

  //salvo array di occorrenze per stringa2
  for(i = 0; i < str2.length; i++){
    occ_str2[str2[i]] = occ_str2[str2[i]] ? (occ_str2[str2[i]] + 1) : 1;
  }

  //il minor numero di caratteri da rimuovere per fare l'anagramma è
  //il valore assoluto della differenza dei singoli
  for(i = 0; i < CHARS.length; i++){
    var p = occ_str2[CHARS[i]];
    result += Math.abs((occ_str2[CHARS[i]] || 0) - (occ_str1[CHARS[i]] || 0 )) ;
  }

  return result;
}

console.log(count_anagram('bcadeh', 'hea'));
