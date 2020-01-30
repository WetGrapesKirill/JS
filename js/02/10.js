let years = +prompt("enter");
let lofty = false;

if (((year % 400) || (year % 4 == 0)) && (years % 100 != 0)) {
    lofty = true;
} else {
    lofty = false;
}
let month = +prompt("enter");
if ((month >= 1) || (month <= 12)) {
    let day = +prompt("enter");
    if (day >= 1) {
        if (day <= 28 && (!lofty && month == 2)) {
            if (day <= 29 && (lofty && month == 2)) {
                if (day <= 30 && (month == 4 || month == 6 || month == 10)) {
                    if (day <= 31) {
                        ++day;
                        if (day >= 32) {
                            if (day) { }
                        }
                    }
                }
            }
        }
    } else {
        alert("eror")
    }
}