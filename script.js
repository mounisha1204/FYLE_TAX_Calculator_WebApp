document.getElementById('submitbtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    
    
    var income = parseFloat(document.getElementById('income').value);
    var extraIncome = parseFloat(document.getElementById('extraincome').value);
    var ageGroup = parseInt(document.getElementById('age').value);
    var deductions = parseFloat(document.getElementById('deductions').value);
    
    var totalIncome = income + extraIncome - deductions;

    var tax = 0;
    if(totalIncome <= 800000) {
        tax = 0;
    } else if(ageGroup < 40) {
        tax = 0.3 * (totalIncome - 8);
    } else if(ageGroup >= 40 && ageGroup < 60) {
        tax = 0.4 * (totalIncome - 8);
    } else {
        tax = 0.1 * (totalIncome - 8);
    }
    var formattedTax = tax.toLocaleString('en-IN', { maximumFractionDigits: 3 });

    document.getElementById('container').style.display = 'block';
    document.getElementById('tax').textContent = "₹ " + formattedTax;


    

});
document.getElementById('btn').addEventListener('click', function(event){
    event.preventDefault();
    document.getElementById('container').style.display = 'none';


})
const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (!isNaN(parseFloat(this.value)) && isFinite(this.value)) {
            this.parentNode.querySelector('.tooltip').style.display = 'none';
        } else {
            this.parentNode.querySelector('.tooltip').style.display = 'block';
            this.parentNode.querySelector('.tooltip').setAttribute('data-tooltip', 'Please enter a valid number');
        }
    });
});


