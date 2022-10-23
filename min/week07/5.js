function solution(arr) {
    let sum = arr.reduce((prev, accur) => prev+accur)
    let avg = sum / arr.length
    return avg
    }