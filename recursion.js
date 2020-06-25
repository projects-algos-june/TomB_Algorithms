//Recursive Sigma

//   function rSigma(n) {
//       if (n < 1) return 0;

//       return n + rSigma(n - 1);
//   }
//   console.log(rSigma(5));

  //Recursive Factorial

  function rFact(n) {
      if (n === 2) return 2;
      return n * rFact(n - 1);
  }
  console.log(rFact(3));