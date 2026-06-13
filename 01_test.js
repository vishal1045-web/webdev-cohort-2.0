
export function getTicketPrice(age, isWeekend) {
    // Your code here
    var age =18;
    if (typeof age !== 'number' || age < 0) return -1;
    
      let price;
      
      if (age <= 12) {
        price = 8;
      }else if(age<=17){
        price = 12;
      }else if(age <=59)
      {
        price = 15;
      }else if(age>59)
      {
        price = 10;
      }
      // ... rest of your logic
      return price;
  }