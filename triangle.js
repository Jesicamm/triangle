function triangle (a,b,c) {

    if(a == b && a == c){
        console.log("El triangulo es Equilatero");
    }
    else if (a != b && a != c && b != c){
        console.log("El triangulo es Escaleno");
    }
    else {
        console.log("El triangulo es Isosceles");
    }

}
triangle(2,2,2)
triangle(4,2,2)
triangle(4,3,2)
triangle(2,2,4)