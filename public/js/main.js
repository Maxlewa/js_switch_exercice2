// EXO 1

// let nb = parseInt(prompt("Donne-moi un nombre"))

// switch (isNaN(nb)) {
//     case true:
//         alert("Error - NaN")
//         break;
//     case false:
//         switch (nb%2 == 0) {
//             case (true):
//                 alert("Ce nombre est pair")
//                 break;
//             case (false):
//                 alert("Ce nombre est impair")
//                 break;
//             default:
//                 alert("error")
//                 break;
//         }
//     default:
//         break;
// }

// EXO 2

let douze = prompt("Un nombre entre 1 et 12 stp :")

switch (douze) {
    case "1":
        alert("Janvier")
        break;
    case "2":
        alert("Février")
        break;
    case "3":
        alert("Mars")
        break;
    case "4":
        alert("Avril")
        break;
    case "5":
        alert("Mai")
        break;
    case "6":
        alert("Juin")
        break;
    case "7":
        alert("Juillet")
        break;
    case "8":
        alert("Août")
        break;
    case "9":
        alert("Septembre")
        break;
    case "10":
        alert("Octobre")
        break;
    case "11":
        alert("Novembre")
        break;
    case "12":
        alert("Décembre")
        break;
    default:
        alert("Entre 1 et 12 on a dit ...")
        break;
}