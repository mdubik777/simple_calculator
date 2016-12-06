$(document).ready(function(){

    var table = $('.calculator');
    var input = $('.input-calc');
    var warning = $('.impossibleAction-js');
    input.val('0');
    var inputNumber = 0;
    var numberInInput = 0;
    var keyFlag = false;
    var flag = true;
    var action;

    table.on('click', function(e){
        var td = $(e.target);
        var dataType = td.data('type');

    switch (dataType) {
        case "reset":
            input.val('0');
            warning.removeClass('makeVisible-js');
            inputNumber = 0;
            flag = true;
            keyFlag = false;
            action = null;
            break;

        case "number":
            if (warning.hasClass('makeVisible-js')) return;
            if (keyFlag == true) {
                input.val('');
            }
            keyFlag = false;
            var text = td.text();
            var inputSign = input.val();
            if (inputSign !== "0") {
                input.val(inputSign + text);
            } else {
                input.val(text);
            }
            break;

        case "point":
            if (warning.hasClass('makeVisible-js')) return;
            if(keyFlag == false) {

                var point = input.val();
                var arrayNumbers = point.split('');
                var flagPoint = arrayNumbers.some(function(_point){
                    return _point == '.';
                });
                if (flagPoint == false) {
                    input.val(point + '.');
                } else {
                    return;
                }
            }
            break;


        case "plus":
            if (warning.hasClass('makeVisible-js')) return;
            if (keyFlag == false) {
                if (action == "minus") {
                    inputNumber = inputNumber - Number(input.val());
                    input.val(inputNumber);
                    keyFlag = true;
                    action = "plus";
                    return;
                }
                if (action == "multiplication"){
                    inputNumber = Number(inputNumber) * Number(input.val());
                    input.val(inputNumber);
                    keyFlag = true;
                    action = "plus";
                    return;
                }
                if (action == "division"){
                    inputNumber = Number(inputNumber) / Number(input.val());
                    input.val(inputNumber);
                    keyFlag = true;
                    action = "plus";
                    return;
                }
                if(flag == true) {
                    inputNumber = Number(input.val());
                    flag = false;
                } else {
                    inputNumber = inputNumber + Number(input.val());
                }
                input.val(inputNumber);

            }
            action = "plus";
            keyFlag = true;
            flag = false;
            break;


        case "minus":
            if (warning.hasClass('makeVisible-js')) return;
            if (keyFlag == false) {
                if (action == "plus") {
                    inputNumber = Number(inputNumber) + Number(input.val());
                    input.val(inputNumber);
                    keyFlag = true;
                    action = "minus";
                    return;
                }
                if (action == "multiplication"){
                    inputNumber = Number(inputNumber) * Number(input.val());
                    input.val(inputNumber);
                    keyFlag = true;
                    action = "minus";
                    return;
                }
                if (action == "division"){
                    inputNumber = Number(inputNumber) / Number(input.val());
                    input.val(inputNumber);
                    keyFlag = true;
                    action = "minus";
                    return;
                }


                if (flag == true) {
                    inputNumber = Number(input.val());
                    flag = false;
                } else {
                    inputNumber = inputNumber - Number(input.val());
                    input.val(inputNumber);
                }

            }
            action = "minus";
            keyFlag = true;
            flag = false;
            break;

        case "multiplication":
            if (warning.hasClass('makeVisible-js')) return;
            if (keyFlag == false) {
                if (action == "plus") {
                    inputNumber = Number(inputNumber) + Number(input.val());
                    input.val(inputNumber);
                    keyFlag = true;
                    action = "multiplication";
                    return;
                }
                if (action == "minus") {
                    inputNumber = inputNumber - Number(input.val());
                    input.val(inputNumber);
                    keyFlag = true;
                    action = "multiplication";
                    return;
                }
                if (action == "division") {
                    inputNumber = inputNumber / Number(input.val());
                    input.val(inputNumber);
                    keyFlag = true;
                    action = "multiplication";
                    return;
                }
                if(flag == true) {
                    inputNumber = Number(input.val());
                    flag = false;
                } else {
                    inputNumber = inputNumber * Number(input.val());
                    input.val(inputNumber);
                }

            }
            action = "multiplication";
            keyFlag = true;
            flag = false;
            break;
        case "division":
            if (warning.hasClass('makeVisible-js')) return;
            if (keyFlag == false) {
                if (action == "plus") {
                    inputNumber = Number(inputNumber) + Number(input.val());
                    input.val(inputNumber);
                    keyFlag = true;
                    action = "division";
                    return;
                }
                if (action == "minus") {
                    inputNumber = inputNumber - Number(input.val());
                    input.val(inputNumber);
                    keyFlag = true;
                    action = "division";
                    return;
                }
                if (action == "multiplication") {
                    inputNumber = inputNumber * Number(input.val());
                    input.val(inputNumber);
                    keyFlag = true;
                    action = "division";
                    return;
                }
                if(flag == true) {
                    inputNumber = Number(input.val());
                    flag = false;
                } else {
                    inputNumber = inputNumber / Number(input.val());
                    input.val(inputNumber);
                }

            }
            action = "division";
            keyFlag = true;
            flag = false;
            break;


        case "equally":
            if (warning.hasClass('makeVisible-js')) return;
            if (keyFlag == false) {
                numberInInput = Number(input.val());
                if (action == "plus") {
                    input.val(inputNumber + numberInInput);
                    inputNumber = inputNumber + numberInInput;

                }
                if (action == "minus") {
                    input.val(inputNumber - numberInInput);
                    inputNumber = inputNumber - numberInInput;
                }
                if (action == "multiplication") {
                    input.val(inputNumber * numberInInput);
                    inputNumber = inputNumber * numberInInput;
                }
                if (action == "division") {
                    if (numberInInput == 0) {
                        input.val('0');
                        warning.addClass('makeVisible-js');
                        return;
                    } else {
                        input.val(inputNumber / numberInInput);
                        inputNumber = inputNumber / numberInInput;
                    }
                }
            }
            keyFlag = true;
            flag = true;
            break;
    }
    });
});