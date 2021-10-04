function fibo(n){
 if (n < 2)
    return n;

 else 
    return fibo(n-1)+fibo(n-2);
}


//확인용

for (let i = 1;i<=12;i++)
{
    console.log(fibo(i));
}
