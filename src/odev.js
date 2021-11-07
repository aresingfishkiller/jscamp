//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.

function findPrime(...numbers) {
    
    for(let i =0;i<numbers.length; i++){

        let count=0;
        for(let j=1;j<numbers[i]-1;j++){
            if(numbers[i]%j==0)
            count++;
        }

        if(count==1){
            console.log(numbers[i]+" is a prime number.")
    
    
        }else{
            console.log(numbers[i]+" isn't a prime number.")
        }
    }
    
    
    
}
findPrime(3,14,29,37,150,597)

//Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız

function findAmicableNumbers(num1 ,num2) {
    let divNum1 = findAmicable(num1)
    let divNum2 = findAmicable(num2)

    if (divNum1 === num2 && divNum2 === num1){
        console.log(`${num1} and ${num2} are` + " amicable numbers")
    }
    else{
        console.log(`${num1} and ${num2} aren't` + " amicable numbers") 
    }
}
const findAmicable = (number) => {
    let total = 0
    for (let i = 1; i <= number / 2; i++){
        if(number % i === 0) total += i 
    }
    return total
}

findAmicableNumbers(220, 284)
findAmicableNumbers(864, 1400)

//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.

function perfectNumbers() {
    for (let i = 0; i < 1000; i++) {
        let total = 0
        for (let j = 0; j <= i; j++) {
            if (i%j == 0) {
                total = total + j
            }  
        }
        if (2*i == total) {
            console.log(i + " is a perfect number.")
        }
    }
}

perfectNumbers()

//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

function findPrime() {
    for (let i = 2; i < 1000; i++) {
        let bolen = 0
        for (let j = 2; j < i; j++) {
            if (i%j == 0) {
                bolen = bolen +1
            }
        }
        if (bolen == 0) {
            console.log(i)
        }
    }
}

findPrime()