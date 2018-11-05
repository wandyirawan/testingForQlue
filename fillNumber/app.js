console.log("starting app")

var global = {
  var1:0,
  var2:-1,
  var3:[], 
  indexA: 0,
  indexB: 0,
  num:0
}

const fillNumber = (num) =>
{
  if (global.num === 0){
    global.num =num;
  }
  if(num <= 0) return;
  var lengthArray= global.var3.length;
  let temp =[];
  global.var1 =num
  global.var2 +=1

  if (global.var2>0){
    if (global.var1 < global.var2){
      var lastStk = global.var3[lengthArray-1]
      var item = lastStk[lastStk.length-1]
      let n1 = lastStk[global.indexA]-1 ===1 
        ? [1,1] 
        : [1, lastStk[global.indexA]-1];

      if(lastStk.length>2){
        if (lastStk[global.indexA]=== 1){
          global.indexB = global.indexA
          global.indexA +=1
        }
        n1 = lastStk[global.indexA]-1 ===1 
          ? [1,1] 
          : [1, lastStk[global.indexA]-1];

        let fistItem = lastStk.slice(0, global.indexA)

        temp= fistItem.concat(n1)
      }else{
        temp = n1.concat(item)
      }
      global.indexA+=1;
    }
    else {
      temp.push(global.var2)
      temp.push(global.var1)
    }
  }else{
      temp.push(global.var1)
  }


  console.log(temp)
  global.var3.push(temp)

  fillNumber(num - 1)
}

fillNumber(4)
