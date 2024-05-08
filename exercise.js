//1
function average(...arrays){
    let total = 0
    let min = Math.min(...arrays)
    let max = Math.max(...arrays)
    for(let i = 0; i < arrays.length ; i++ ){
        total += arrays[i]
    }
    let av = total / arrays.length
    console.log("average", av)
    console.log("min", min)
    console.log("max", max)
}
average(12, 5, 23, 18, 4, 45, 32)

console.log("----------------------")

//2
function and(...arr1){
    let w3 = ''
    for(let i = 0;i < arr1.length;i++){
        if(i == arr1.length-1){
            w3 += "and " + arr1[i]
        }else{
            w3 += arr1[i] + ','
        }
        
    }
    console.log(w3)
}
and("banana", "cherry", "apple", "orange")

console.log("----------------------")

//3
function convert(){
    let w = 'hello world'
    let arr = []
    let word = ''

    for(let i = 0; i < w.length; i++){
        if(w[i] !== ' '){
            word += w[i]
            
        }else if(i == w.length -1){
            word += w[i]
        }else{
            arr.push(word)
            word = ''
        }
    }

    return arr
}

console.log(convert())

console.log("----------------------")

//4
function cal(ar1, ar2){
    let res = []
    if(ar1.length !== ar2.length){
        return "array length must be same"
    }else{
        for(let i = 0; i < ar1.length;i++){
            res.push(ar1[i] + ar2[i])
        }
    }
    

    
    return res
}
console.log(cal([1,2,3],[3,2,1,]))

console.log("----------------------")

//5
function add(x){
    let ar3 = [1,2,3,4]
    if(ar3[ar3.length-1] !== x){
        ar3.push(x)
    }
    
    return ar3
}
console.log(add(8))

console.log("----------------------")

//6
function even(...z){
    let ress = []
    for(let i = 0; i < z.length;i++){
        if(z[i] % 2 === 0 ){
            ress.push(z[i])
        }
    }
    return ress
}
console.log(even(1,2,3,4,5,6))

console.log("----------------------")

//7
function max(maxSize, h){
    let a = []
    for(let i = 0; i<=maxSize-1;i++){
        a.push(h[i])
    }
    return a
}
console.log(max(5, [1,2,3,4,5,6,7]))

console.log("----------------------")

//8
function combine(ray1, ray2){
    let m = ray1.concat(ray2)
    return m
}
console.log(combine([1,2,3], [4,5,6]))

console.log("----------------------")

//9
function duplicate(y){
    let y1 = []
    for(let i = 0; i < y.length; i++){
        let found = true
        for(let j = i+1;j < y.length; j++){
            if(i != j && y[i] == y[j] && y[i] != null && y[j] != null){
                y[j] = null
                found = false
                break;
            }
        }
        if(!found){
            y1.push(y[i])
        }
    }
    return y1
}
console.log(duplicate([1, 2, 2, 3, 3, 4,2, 5, 5]))

console.log("----------------------")

//10
function difference(y4, y5){
    let combine = y4.concat(y5)
    let result = []
    for(let i = 0; i < combine.length; i++){
        let found1 = false
        for(let j = 0; j < combine.length; j++){
            if(i != j && combine[i] == combine[j]){
                found1 = true
                break
            }
        }
        if(!found1){
            result.push(combine[i])
        }
    }

    return result
}
console.log(difference([1,2,3,4],[3,4,5,6]))

console.log("----------------------")

//11
function primitive(r){
    let sult = []
    for(let i = 0; i < r.length;i++){
        if(typeof r[i] !== "object"){
            sult.push(r[i])
        }
    }
    return sult
}
console.log(primitive([1,[],undefined,{},"string",{},[]]))

console.log("----------------------")

//12
function secondNumber(ary){
    let small = 0
    let small2 = 0
    for(let i = 0; i < ary.length; i++){
        if(i == 0){
            small = ary[i]
        }else if(ary[i] < small){
            small2 = small
            small = ary[i]
        } else if (ary[i] < small2 && ary[i] !== small){
            small2 = ary[i]
        }
    }
    console.log(small2)
}
secondNumber([5,3,1,7,2,6])

console.log("----------------------")

//13
function sum(ari){
    let r = 0
    for(let i = 0; i < ari.length; i++){
        if(typeof ari[i] == "number"){
            r += ari[i]
        }
    }
    return r
}
console.log(sum(["3",1,"string", null, false, undefined, 2])) 

console.log("----------------------")

//14
function sumOf(d){
    let tempArr = []
    for(let i = 0; i < d.length; i++){
        let f = true
        for(let j = 0; j < d.length; j++){
            if(i != j && d[i] == d[j]){
                f = false
                break
            }
        }
        if(!f){
            tempArr.push(d[i])
        }
    }
    let sult = 0
    for(let i = 0;i < tempArr.length; i++){
        sult += tempArr[i]
    }
    return sult
}
console.log(sumOf([10, 20, 40, 10, 50, 30, 10, 60, 10]))

console.log("----------------------")

//15
function suit(playerChoice){
    let a = ["rock", "paper", "scissor"]
    let ai = Math.floor(Math.random() * 3)

    if(playerChoice == a[ai]){
        return "draw"
    }else if((playerChoice == "rock" && a[ai] == "scissor") ||
    (playerChoice == "scissor" && a[ai] == "paper") || 
    (playerChoice == "paper" && a[ai] == "rock")){
        return "player win"
    }else{
        return "ai win"
    }
}

console.log(suit("rock"))

console.log("----------------------")

 