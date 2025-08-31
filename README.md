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
    a; A fenti weboldalról telepítsd a legfrissebb Node verziót.
    b; Nyisd meg a github repositoryt a Visual Studio Code-ban (101_Javascript_Basics) és nyiss egy új terminalt.
    c; Futtasd az **npm install** parancsot.
2. A telepítés után megjelenik a node_modules mappa a tests, src, mappa mellett a gyökérkönyvtárban.
3. A teszteket a terminálban az **npm test** paranccsal tudod futtatni.


🧮 Matematikai feladatok

add(a, b) – add össze két számot
subtract(a, b) – vond ki a másodikat az elsőből
multiply(a, b) – szorozd össze a két számot
divide(a, b) – oszd el az első számot a másodikkal (0 esetén null)
power(base, exp) – hatványozás
squareRoot(x) – szám négyzetgyöke (negatív esetén null)
factorial(n) – n faktoriális (negatívnál null)
isPrime(n) – eldönti, hogy prím-e a szám
gcd(a, b) – legnagyobb közös osztó
lcm(a, b) – legkisebb közös többszörös
average(arr) – tömb elemeinek átlaga (üresnél null)
minInArray(arr) – legkisebb érték a tömbben (üresnél null)
maxInArray(arr) – legnagyobb érték a tömbben (üresnél null)
absolute(x) – abszolút érték
roundNumber(x) – kerekítés egész számra

🔤 String feladatok

stringLength(str) – string hossza
toUpper(str) – alakítsd nagybetűssé
toLower(str) – alakítsd kisbetűssé
firstChar(str) – első karakter (üresnél null)
lastChar(str) – utolsó karakter (üresnél null)
reverseString(str) – fordítsd meg a szöveget
isPalindrome(str) – palindrom-e (szóköz és kis/nagybetű figyelmen kívül)
removeSpaces(str) – távolítsd el az összes szóközt
includesSubstring(str, sub) – tartalmazza-e a részszöveget
repeatString(str, times) – ismételd meg a szöveget times alkalommal
splitWords(str) – darabold szavakra
concatStrings(a, b) – két string összefűzése
replaceSubstring(str, search, replace) – részszöveg cseréje
charCode(str) – első karakter unicode kódja (üresnél null)
stringToNumber(str) – alakítsd számmá (ha nem lehet, null)

📦 Array (tömb) feladatok

arrayLength(arr) – tömb hossza
firstElement(arr) – első elem (üresnél null)
lastElement(arr) – utolsó elem (üresnél null)
pushElement(arr, el) – add hozzá az elemet a végéhez
unshiftElement(arr, el) – add hozzá az elemet az elejéhez
popElement(arr) – vedd ki az utolsó elemet és add vissza
shiftElement(arr) – vedd ki az első elemet és add vissza
includesElement(arr, el) – tartalmazza-e az elemet
indexOfElement(arr, el) – add vissza az elem indexét
sumArray(arr) – tömb elemeinek összege
averageArray(arr) – tömb elemeinek átlaga (üresnél null)
sortArray(arr) – rendezés növekvő sorrendben
reverseArray(arr) – fordítsd meg a sorrendet
filterEven(arr) – szűrd ki a páros számokat
squareArray(arr) – minden elemet emelj négyzetre    
