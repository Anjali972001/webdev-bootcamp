function bmiCalculator(weight , height)
{
    var bmi=weight/Math.pow(height,2);
    return Math.round(bmi) ;// math.
}
var bmi=bmiCalculator(10,2);
console.log(bmi);