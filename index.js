const display = document.querySelector('.result');
const equals = document.querySelector('.equals');
const buttons = document.querySelectorAll('.btn');
const symbols = ['+','x','÷','-','.','=']





buttons.forEach(button => {
    button.addEventListener('click', () => {
        let equation = display.textContent;
        let input = button.textContent;
        const lastInput = equation[equation.length -1];
        
        if(equation === '0' && button.classList.contains('num')) {
            equation = '';
        }

        if(symbols.includes(lastInput) && symbols.includes(input)) {
            input = '';
        }

        if(input === '=') {
            const cleanedEquation = equation.replaceAll('x','*').replaceAll('÷','/');
            display.textContent = eval(cleanedEquation);
        } else if (input === 'C') {
            display.textContent = '0'
        } else {
            display.textContent = `${equation}${input}`
        }
        
    })
})

