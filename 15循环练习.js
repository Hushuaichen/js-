let emt = '\t\t\t\t'
for(let i=0;i<=5;i++){
    emt-='\t'
    let str = ''
    for(let j=1;j<=2*i-1;j++){
        str+='*'
    }
    console.log(emt+str);
}
