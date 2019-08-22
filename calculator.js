const calculator = (value) => {
    if(value == ' = '){
      formCalculator.result.value = eval(formCalculator.result.value)
    }else if(value == ' c '){
      formCalculator.result.value = ''
    }else{
      formCalculator.result.value += value
    }
}