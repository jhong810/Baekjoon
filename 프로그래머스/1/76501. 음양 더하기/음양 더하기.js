function solution(absolutes, signs) {
    var answer = 0;
    for(let i = 0; i < signs.length; i++){
        if(signs[i]===false) answer -= absolutes[i];
        else answer += absolutes[i];
    }
    return answer;
}