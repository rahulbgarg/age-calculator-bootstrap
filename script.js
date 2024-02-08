calculateBtn =function(){
    const dateInputValue = document.querySelector('#dateInput').value;    
    if(dateInputValue)
    {
        const birthDate = new Date(dateInputValue);
        const currentDate = new Date();
        const ageIn = currentDate - birthDate;
        const ageInYears = ageIn/(365.25*24*60*60*1000);
        document.querySelector('#result').innerHTML = Math.floor(ageInYears) + "Yrs";
    }
    else{
        document.querySelector('#result').innerHTML = "Please Select a date";
    }
}

resetBtn = function (){
document.querySelector('#dateinput').value = " ";
document.querySelector('#result').innerHTML = "";
}