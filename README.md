# JavaScript gyakorló feladatok

Ebben a repositoryban **45 alapfeladatot** találsz három kategóriában:  
- 🧮 15 matematikai feladat  
- 🔤 15 string feladat  
- 📦 15 array (tömb) feladat  

A feladatok üres függvényként találhatók a `src/solutions.js` fájlban.  
A `tests/solutions.test.js` automatikusan ellenőrzi a megoldásokat.

---

## Hogyan használd?

1. Telepítsd a csomagokat:
    https://nodejs.org/en
2. A fenti weboldalról telepítsd a legfrissebb Node verziót.
3. Nyisd meg a github repositoryt a Visual Studio Code-ban (101_Javascript_Basics) és nyiss egy új terminalt.
4. Futtasd az **npm install** parancsot.
5. A telepítés után megjelenik a node_modules mappa a tests, src, mappa mellett a gyökérkönyvtárban.
6. A teszteket a terminálban az **npm test** paranccsal tudod futtatni.


🧮 Matematikai feladatok

1. add(a, b) – add össze két számot
2. subtract(a, b) – vond ki a másodikat az elsőből
3. multiply(a, b) – szorozd össze a két számot
4. divide(a, b) – oszd el az első számot a másodikkal (0 esetén null)
5. power(base, exp) – hatványozás
6. squareRoot(x) – szám négyzetgyöke (negatív esetén null)
7. factorial(n) – n faktoriális (negatívnál null)
8. isPrime(n) – eldönti, hogy prím-e a szám
9. gcd(a, b) – legnagyobb közös osztó
10. lcm(a, b) – legkisebb közös többszörös
11. average(arr) – tömb elemeinek átlaga (üresnél null)
12. minInArray(arr) – legkisebb érték a tömbben (üresnél null)
13. maxInArray(arr) – legnagyobb érték a tömbben (üresnél null)
14. absolute(x) – abszolút érték
15. roundNumber(x) – kerekítés egész számra

🔤 String feladatok

1. stringLength(str) – string hossza
2. toUpper(str) – alakítsd nagybetűssé
3. toLower(str) – alakítsd kisbetűssé
4. firstChar(str) – első karakter (üresnél null)
5. lastChar(str) – utolsó karakter (üresnél null)
6. reverseString(str) – fordítsd meg a szöveget
7. isPalindrome(str) – palindrom-e (szóköz és kis/nagybetű figyelmen kívül)
8. removeSpaces(str) – távolítsd el az összes szóközt
9. includesSubstring(str, sub) – tartalmazza-e a részszöveget
10. repeatString(str, times) – ismételd meg a szöveget times alkalommal
11. splitWords(str) – darabold szavakra
12. concatStrings(a, b) – két string összefűzése
13. replaceSubstring(str, search, replace) – részszöveg cseréje
14. charCode(str) – első karakter unicode kódja (üresnél null)
15. stringToNumber(str) – alakítsd számmá (ha nem lehet, null)

📦 Array (tömb) feladatok

1. arrayLength(arr) – tömb hossza
2. firstElement(arr) – első elem (üresnél null)
3. lastElement(arr) – utolsó elem (üresnél null)
4. pushElement(arr, el) – add hozzá az elemet a végéhez
5. unshiftElement(arr, el) – add hozzá az elemet az elejéhez
6. popElement(arr) – vedd ki az utolsó elemet és add vissza
7. shiftElement(arr) – vedd ki az első elemet és add vissza
8. includesElement(arr, el) – tartalmazza-e az elemet
9. indexOfElement(arr, el) – add vissza az elem indexét
10. sumArray(arr) – tömb elemeinek összege
11. averageArray(arr) – tömb elemeinek átlaga (üresnél null)
12. sortArray(arr) – rendezés növekvő sorrendben
13. reverseArray(arr) – fordítsd meg a sorrendet
14. filterEven(arr) – szűrd ki a páros számokat
15. squareArray(arr) – minden elemet emelj négyzetre    

## Fontos információk!

Csak a Solutions.js fájlban kell dolgoznod! A fájl szerkezeteket ne írd át és ne módosítsd a funkciók nevét és paramétereit sem, mert ezzel ellehetetleníted a teszteket és a feladatok beadását.

Ne használj AI megoldásokat, mivel azokból nem fogod megtanulni az alapokat. Későbbi feladatoknál majd engedélyezve lesz a mesterséges intelligencia használata is.

A w3schools és egyéb google keresések általi megoldások használhatóak.