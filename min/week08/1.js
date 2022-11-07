//백준 24060 알고리즘 수업 - 병합 정렬1


//병합정렬 알고리즘
function merge(arr1, arr2){
    let result = [];
    let i = 0; //i는 arr1의 인덱스이다. arr1의 길이까지 모두 순회할 예정
    let j = 0; //j도 마찬가지
    while(i < arr1.length && j < arr2.length){ //반복문은 arr1의 인덱스인 i가 마지막 인덱스가 될 때까지 반복한다.
        if(arr2[j] > arr1[i]){ // 두 배열의 값을 앞에서부터 비교해서
            result.push(arr1[i]); // arr1의 배열의 값이 arr2 보다 작으면, result 배열에 넣는다.
            i++;                 // arr1의 인덱스인 i를 증가시킨다.
        } else {
            result.push(arr2[j])
            j++;
    }
    while(i < arr1.length){ //두 배열의 길이가 다르고, 하나의 배열 순회가 끝나는 경우를 고려한다.
        result.push(arr1[i]);// 즉 위의 반복문을 다 돌았는데, 인덱스가 배열 끝까지 순회 못했다면, 해당 배열에서 남은 것들을 모두 
        i++;                 //result 배열에 넣어줘야 한다.
    }                        //예를 들어, [1,3,4,5,8,9,10] [2,6,7] => 앞에 배열에서 [8,9,10]이 남는다.
    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }
    return result;
    }
}