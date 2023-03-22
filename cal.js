function plus(){
     let n1 = document.getElementById('First').innerText;
     let n2 = document.getElementById('Second').innerText;
     let ans = Number(n1) + Number(n2);
     console.log(ans);
     document.getElementById('answer').innerText = ans
}