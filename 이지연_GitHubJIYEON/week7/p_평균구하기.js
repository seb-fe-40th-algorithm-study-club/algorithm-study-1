//정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
//입력 [1,2,3,4] 출력 2.5

function solution(arr) {
  var answer = 0;
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return (answer = sum / arr.length);
}
