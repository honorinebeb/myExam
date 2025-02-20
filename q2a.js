function Power(base, exponent) {
    
    if (exponent < 0 || !Number.isInteger(exponent)) {
      return 'Exponent must be a non-negative integer';
    }
  
    
    const result = base ** exponent;
  
    return result;
  }
  

  const base = 2;
  const exponent = 3;
  
  const result = Power(base, exponent);
  console.log(result); 