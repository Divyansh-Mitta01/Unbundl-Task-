document.addEventListener('DOMContentLoaded', function () {

    let currentCartTotal = 0;

    function updateChocolateNumber(product, price, isIncreasing) {
        const chocolateInput = document.getElementById(product + '-number');
        let chocolateNumber = parseInt(chocolateInput.value);

        if (isIncreasing) {
            if (chocolateNumber < 8) {
                chocolateNumber = parseInt(chocolateNumber) + 1;
                currentCartTotal += price;
            }
        } else if (chocolateNumber > 0) {
            chocolateNumber = parseInt(chocolateNumber) - 1;
            currentCartTotal -= price;
        }

        if (chocolateNumber > 8) {
            chocolateNumber = 8;
        }

        chocolateInput.value = chocolateNumber;

        const chocolateTotal = document.getElementById(product + '-total');
        chocolateTotal.innerText = (chocolateNumber * price).toFixed(2);
        calculateTotal();
    }

    function getInputValue(product) {
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }

    function calculateTotal() {
        const chocolateTotal1 = getInputValue('chocolate1') * 20.00; 
        const chocolateTotal2 = getInputValue('chocolate2') * 10.00; 
        const chocolateTotal3 = getInputValue('chocolate3') * 15.00;
        const chocolateTotal4 = getInputValue('chocolate4') * 20.00; 
        const chocolateTotal5 = getInputValue('chocolate5') * 50.00;
        const chocolateTotal6 = getInputValue('chocolate6') * 40.00;
        const chocolateTotal7 = getInputValue('chocolate7') * 30.00;
        const chocolateTotal8 = getInputValue('chocolate8') * 80.00; 

        const subTotal = chocolateTotal1 + chocolateTotal2 + chocolateTotal3 + chocolateTotal4 + chocolateTotal5 +
                        chocolateTotal6 + chocolateTotal7 + chocolateTotal8;

        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;

        document.getElementById('sub-total').innerText = subTotal.toFixed(2);
        document.getElementById('tax-amount').innerText = tax.toFixed(2);
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);
    }
    for (let i = 1; i <= 8; i++) {
        const chocolatePlusBtn = document.getElementById('chocolate' + i + '-plus');
        const chocolateMinusBtn = document.getElementById('chocolate' + i + '-minus');

        chocolatePlusBtn.addEventListener('click', function () {
            updateChocolateNumber('chocolate' + i, (i * 5.00), true);
        });

        chocolateMinusBtn.addEventListener('click', function () {
            updateChocolateNumber('chocolate' + i, (i * 5.00), false);
        });
    }

    document.querySelector('.check-out').addEventListener('click', function () {
        if (currentCartTotal > 8) {
            alert('Maximum total cart value reached. You cannot check out with more than 8 chocolates.');
        } else {
            alert('Checkout successful!'); 
}});
});
