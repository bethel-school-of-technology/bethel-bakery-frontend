
//functions that handles money
export class Money {

  private static tax:number = .07;

  private static dollarUS = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  constructor() { }

  //Takes an amount and * by 100 (example 12.89 = 1289)
  public static convertMoneyToNumber(amount:number):number {
    return amount * 100;
  }

  //Takes a number and / by 100 and rounds to two places 
  //(example 1289.8 = 12.90 )
  public static convertNumberToMoney(amount:number):number{
    amount = amount / 100;
    return Math.round((amount + Number.EPSILON) * 100) / 100;
  }

  //add up an array of numbers and returns the sum
  //Make sure money is in correct format(28.89 should be 2889)
  public static calculateSubTotal(numbersToBeAdded: number[]): number {
    
    return numbersToBeAdded.reduce(function(a,b){return a + b;}); 
   
  }

  //calculate the a number befor tax. 
  //Make sure money is in correct format(28.89 should be 2889)
  public static calculateTax(amount: number): number {
    return amount + (amount * this.tax)
  }

  //formats a number to curancy (example: 2.8 = $2.80)
  public static formatNumberToMoney(amount: number): string {
    return this.dollarUS.format(amount);
  }
}
