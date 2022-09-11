function bmiCalculator(weight , height)
{
    var bmi=weight/Math.pow(height,2);// math.pow()---> is used to get the power .
    return Math.round(bmi) ;// math.round ---is used to round the decimal number.
}
var bmi=bmiCalculator(10,2);
console.log(bmi);