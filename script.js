function func() {
    let txt = document.getElementById("number").value;
    if(txt.length < 1 || txt.length > 3) {
        alert("Enter Number between 0 - 999");
        return ;
    } else if(txt.length === 1 && txt[0] === '0') {
        document.getElementById("result").value = "zero";
        return ;
    } else if(txt.length > 1 && txt[0] === '0') {
        alert("Please do not start number with 0 except the number 0 itself!!");
        return ;
    } else {
        let arr = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
        let tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
        console.log(`You entered ${txt}`);
        let res = "";
        for(let i = 0; i < txt.length; i++) {
            if(txt.length - 1 - i == 2) {
                let tmp = txt.charCodeAt(i) - 48; // it can be 1 2 3 4 5 6 7 8 9
                let num = arr[tmp];
                res += num + " hundred ";
            } else if(txt.length - 1 - i == 1) {
                if(txt[i] !== '0') {
                    let tmp = txt.charCodeAt(i) - 48; // it can be 1 2 3 4 5 6 7 8 9 
                    if(tmp === 1) {
                        let t = txt.charCodeAt(i + 1) - 48; // it can be 0 1 2 3 4 5 6 7 8 9
                        res += arr[t + 10] + " ";
                        i = txt.length; // we do not have to go forward now!
                    } else {
                        // it can be 2 3 4 5 6 7 8 9
                        res += tens[tmp] + " ";
                    }
                }
            } else if(txt[i] !== '0') {
                // that means if the zeros place is not zero
                let tmp = txt.charCodeAt(i) - 48;
                // it can be 1 2 3 4 5 6 7 8 9
                res += arr[tmp];
            }
        }
        document.getElementById("result").value = res;
    }
}