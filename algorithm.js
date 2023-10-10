// meetAt() 함수 만들기
// meetAt(2022); // 결과 --> "2022년"
// meetAt(2022, 3); // 결과 --> "2023년 3월"
// meetAt(2022, 3, 1) // 결과 --> "2023/3/1"

function meetAt(year, month, date) {
    if (year && month && date) {
        return `${year}/${month}/${date}`;
    } else if (year && month) {
        return `${year}년 ${month}월`;
    } else if (year) {
        return `${year}년`;
    }
}

// console.log(meetAt(2022));
// console.log(meetAt(2022, 3));
// console.log(meetAt(2022, 3, 1));

// findSmallestElement 함수 구현
// findSmallestElement의 arr 인자는 숫자 값으로만 이루어진 배열
// arr 의 값들 중 가장 작은 값을 리턴
// 만약 arr이 비어있으면 0을 리턴

function findSmallestElement(arr) {
    // arr가 비어있음을 표현
    if (arr.length == 0) {
        return 0;
    }

    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (result > arr[i]) {
            result = arr[i];
        }
    }

    return result;
}

// console.log(findSmallestElement([100, 300, 3, 5, 2, 1]));

// 돈을 매개변수로 받으면 몇 개의 지폐와 동전이 필요한지 최소 개수를 계산해주는 함수
// 12300원인 경우 : 50000 x 0 / 10000 x 1 / 5000 x 0 / 1000 x 2 / 500 x 0 / 100 x 3
let unit = [50000, 10000, 5000, 1000, 500, 100];

function change(money) {
    for (i = 0; i < unit.length; i++) {
        let num = Math.floor(money / unit[i]); // Math.floor() : 버림
        console.log(`${unit[i]} x ${num}`);
        money = money - (unit[i] * num);
    }
}

change(12300);