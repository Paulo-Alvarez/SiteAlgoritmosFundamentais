document.getElementById('primeBtn').addEventListener('click', checkPrime);
document.getElementById('sumBtn').addEventListener('click', calculateSum);
document.getElementById('fibonacciBtn').addEventListener('click', generateFibonacci);
document.getElementById('mdcBtn').addEventListener('click', calculateMDC);
document.getElementById('quicksortBtn').addEventListener('click', quicksort);
document.getElementById('countBtn').addEventListener('click', countInRange);

function getInput() {
    let inputValue = document.getElementById('inputValue').value;
    return inputValue.split(',').map(num => parseInt(num.trim()));
}

function setResult(message) {
    document.getElementById('resultText').textContent = message;
}

// 1. Verificar se é Primo
function checkPrime() {
    let num = getInput()[0];
    if (num < 2) {
        setResult(`${num} não é primo.`);
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            setResult(`${num} não é primo.`);
            return;
        }
    }

    setResult(`${num} é primo.`);
}

// 2. Somar Números
function calculateSum() {
    let numbers = getInput();
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    setResult(`A soma dos números é: ${sum}`);
}

// 3. Gerar Fibonacci
function generateFibonacci() {
    let n = getInput()[0];
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    setResult(`Os primeiros ${n} números de Fibonacci são: ${fib.join(', ')}`);
}

// 4. Máximo Divisor Comum (MDC)
function calculateMDC() {
    let [a, b] = getInput();
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    setResult(`O MDC de ${a} e ${b} é: ${a}`);
}

// 5. Ordenação com Quicksort
function quicksort() {
    let numbers = getInput();
    function quickSort(arr) {
        if (arr.length <= 1) return arr;
        let pivot = arr[arr.length - 1];
        let left = [], right = [];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
        }
        return [...quickSort(left), pivot, ...quickSort(right)];
    }
    let sorted = quickSort(numbers);
    setResult(`Array ordenado: ${sorted.join(', ')}`);
}

// 6. Contagem de Números no Intervalo
function countInRange() {
    let [first, last] = getInput();
    let numbers = getInput();
    let count = numbers.filter(num => num >= first && num <= last).length;
    setResult(`Existem ${count} números entre ${first} e ${last}.`);
}

document.getElementById('linkBtn1').addEventListener('click', function() {
    // Substitua pelo link do algoritmo "Primo" em Java
    window.open('https://www.jdoodle.com/ia/1EC2', '_blank');
});

document.getElementById('linkBtn2').addEventListener('click', function() {
    // Substitua pelo link do algoritmo "Somar Números" em Java
    window.open('https://www.jdoodle.com/ia/1EC3', '_blank');
});

document.getElementById('linkBtn3').addEventListener('click', function() {
    // Substitua pelo link do algoritmo "Fibonacci" em Java
    window.open('https://www.jdoodle.com/ia/1EC5', '_blank');
});

document.getElementById('linkBtn4').addEventListener('click', function() {
    // Substitua pelo link do algoritmo "MDC" em Java
    window.open('https://www.jdoodle.com/ia/1EC8', '_blank');
});

document.getElementById('linkBtn5').addEventListener('click', function() {
    // Substitua pelo link do algoritmo "Quicksort" em Java
    window.open('https://www.jdoodle.com/ia/1ECb', '_blank');
});

document.getElementById('linkBtn6').addEventListener('click', function() {
    // Substitua pelo link do algoritmo "Contagem de Intervalo" em Java
    window.open('https://www.jdoodle.com/ia/1ECd', '_blank');
});