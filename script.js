const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector('#result')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please Enter Valid Height ${height}` ; 
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please Enter Valid Weight ${weight}`; 
    }
    else{
        const BMI = (weight / ((height*height)/10000)).toFixed(2)
        if(BMI < 18.5)
        {
            result.innerHTML = `In BMI ${BMI} is Underweight`
        }
        else if(BMI >= 18.5 && BMI <= 24.9)
        {
            result.innerHTML = `In BMI ${BMI} is Normal Weight`
        }
        else if(BMI >=25 && BMI <= 29.9)
        {
            result.innerHTML = `In BMI ${BMI} is Overweight`
        }
        else
        {
            result.innerHTML = `In BMI ${BMI} is Obesity`
        }

    }
})

