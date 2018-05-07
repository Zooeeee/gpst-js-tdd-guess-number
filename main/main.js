// Write your cade below:
var main = function main(answer,solution) {
    var count_a = 0 ;
    var count_b = 0 ;
    var n = 0 ;
    for(var i = 0 ; i < solution.length ; i++){
        n = answer.indexOf(solution[i]);
        if (answer[i] === solution[i])
        count_a ++;
        else if (answer[i] !== solution[i] && n >= 0  )
        count_b++;
    }
    
    return count_a+"A"+count_b+"B" ;};
//module.exports = {main}
module.exports = main;

