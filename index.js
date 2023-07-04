function sumNeu(a, b, callback) {
    const summe = a + b;
    callback(summe);
}
  
function sumCallbackFunction(ergebnis) {
    console.log("Das Ergebnis ist:", ergebnis);
}
  
function waitForFive(callback) {
    if (typeof callback === "function") {
      setTimeout(() => {
        callback(5);
    }, 5000);
    } else {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(5);
        }, 5000);
    });
    }
}
  
function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
}
  
async function asyncCaller() {
    const ergebnis = await waitForFive();
    console.log(ergebnis);
}
  
asyncCaller();
  
sumNeu(1, 2, sumCallbackFunction);
  