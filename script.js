function primer() {
    let schet = 0;
    let correct = 0;
    let incorrect = 0;
    let run = document.getElementById('2')
    while (schet != 10) {
        let arif = 1 + Math.floor(3 * Math.random())
        let otvet, num1, num2;
        if (arif === 1) {
            num1 = 1 + Math.floor(400 * Math.random() )
            num2 = 1 + Math.floor(350 * Math.random() )
            otvet = Number(prompt("how much is "+num1+"+"+num2+"=?"))
            if (otvet == num1+num2) {
                alert("great!")
                console.log("+");
                correct = correct + 1;
            }
            else {
                alert("no(")
                console.log("-");
                incorrect = incorrect + 1;
            }
        }
        else if (arif === 2) {
            num1 = 1 + Math.floor(250 * Math.random() )
            num2 = 1 + Math.floor(200 * Math.random() )
            otvet = Number(prompt("how much is "+num1+"-"+num2+"=?"))
            if (otvet == num1-num2) {
                alert("great!")
                console.log("+");
                correct = correct + 1;
            }
            else {
                alert("no(")
                console.log("-");
                incorrect = incorrect + 1;
            }
        }
        else{
            num1 = 1 + Math.floor(15 * Math.random() )
            num2 = 1 + Math.floor(10 * Math.random() )
            otvet = Number(prompt("how much is "+num1+"*"+num2+"=?"))
            if (otvet == num1*num2) {
                alert("great!")
                console.log("+");
                correct = correct + 1;
            }
            else {
                alert("no(")
                console.log("-");
                incorrect = incorrect + 1;
            }
        }
        schet = schet + 1;
    }
    run.innerHTML = "last run: correct:"+correct+"\nincorrect:"+incorrect;
}
