// merge_sort(A[p..r]) { # A[p..r]을 오름차순 정렬한다.
//     if (p < r) then {
//         q <- ⌊(p + r) / 2⌋;       # q는 p, r의 중간 지점
//         merge_sort(A, p, q);      # 전반부 정렬
//         merge_sort(A, q + 1, r);  # 후반부 정렬
//         merge(A, p, q, r);        # 병합
//     }
// }

// # A[p..q]와 A[q+1..r]을 병합하여 A[p..r]을 오름차순 정렬된 상태로 만든다.
// # A[p..q]와 A[q+1..r]은 이미 오름차순으로 정렬되어 있다.
// merge(A[], p, q, r) {
//     i <- p; j <- q + 1; t <- 1;
//     while (i ≤ q and j ≤ r) {
//         if (A[i] ≤ A[j])
//         then tmp[t++] <- A[i++]; # tmp[t] <- A[i]; t++; i++;
//         else tmp[t++] <- A[j++]; # tmp[t] <- A[j]; t++; j++;
//     }
//     while (i ≤ q)  # 왼쪽 배열 부분이 남은 경우
//         tmp[t++] <- A[i++];
//     while (j ≤ r)  # 오른쪽 배열 부분이 남은 경우
//         tmp[t++] <- A[j++];
//     i <- p; t <- 1;
//     while (i ≤ r)  # 결과를 A[p..r]에 저장
//         A[i++] <- tmp[t++];
// }

let input = ["5 13", "4 5 1 3 2"];
let nth = +input[0].split(" ")[1];
let array = input[1].split(" ").map(Number);
let called = 0;

function merge_sort(A, p, r) {
  // A[p..r]을 오름차순 정렬한다.
  if (p < r) {
    let q = Math.floor((p + r) / 2); // q는 p, r의 중간 지점
    merge_sort(A, p, q); // 전반부 정렬
    merge_sort(A, q + 1, r); // 후반부 정렬
    merge(A, p, q, r); // 병합
  }
  return A;
}

// A[p..q]와 A[q+1..r]을 병합하여 A[p..r]을 오름차순 정렬된 상태로 만든다.
// A[p..q]와 A[q+1..r]은 이미 오름차순으로 정렬되어 있다.
function merge(A, p, q, r) {
  let i = p,
    j = q + 1,
    t = 1;
  let tmp = [];
  while (i <= q && j <= r) {
    if (A[i] <= A[j]) tmp[t++] = A[i++]; // tmp[t] = A[i]; t++; i++;
    else tmp[t++] = A[j++]; // tmp[t] = A[j]; t++; j++;
  }
  while (i <= q)
    // 왼쪽 배열 부분이 남은 경우
    tmp[t++] = A[i++];
  while (j <= r)
    // 오른쪽 배열 부분이 남은 경우
    tmp[t++] = A[j++];
  i = p;
  t = 1;
  while (i <= r) {
    // 결과를 A[p..r]에 저장
    A[i++] = tmp[t++];
    called++;
    if (called === nth) {
      console.log(A[i - 1]);
      return;
    }
  }
}

merge_sort(array, 0, array.length - 1);
if (called < nth) console.log(-1);
