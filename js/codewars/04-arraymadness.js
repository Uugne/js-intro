function arrayMadness(a, b) {

    let pirmas = 0;
    for (let i = 0; i < a.length; i++) {
        pirmas = Math.pow(a[i], 2) + pirmas;
        
    } 
    
    let antras = 0; 
    for (let i = 0; i < b.length; i++) {
        antras = Math.pow(b[i], 3) + antras;
    }
    
    if (pirmas > antras) {
        return true } 
        else {
            return false;
        }

  } 

 

  


      console.log(arrayMadness([4,5,6],[1,2,3]), true);
      console.log(arrayMadness([5,6,7],[4,5,6]), false);
      console.log(arrayMadness([4,5,6],[3,4,5]), false);
      console.log(arrayMadness([3,4,5],[2,3,4]), false);
      console.log(arrayMadness([2,3,4],[1,2,3]), false);
      console.log(arrayMadness([1,2,3],[0,1,2]), true);
      console.log(arrayMadness([5,3,2,4,1],[15]), false);
      console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), false);
      console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), false);
      console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), true);
      console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), false);
   
    