function solution(s) {
    var answer = '';
    if(s.length % 2 === 1){
        answer += s.charAt(parseInt(s.length / 2));
    }
    else{
        answer += s.charAt(parseInt(s.length / 2 - 1));
        answer += s.charAt(parseInt(s.length / 2));
    }
    return answer;
}