const test1=document.querySelectorAll(".test1");
const btntest1=document.querySelectorAll('.btntest1');

console.log(btntest1);
console.log(btntest1[0]);


for(let i=0;i<test1.length;i++){
    btntest1[i].addEventListener('click',()=>{
        for(let i=0;i<test1.length;i++){
            test1[i].classList.remove('show');
        }
        test1[i].classList.add('show');
    });
}