function display(num){
    lab.value+=num
}
function allclear(){
    lab.value=""
}
function evaluateexp(){
    // exp=lab.value
    // res=eval(exp)
    // lab.value=res
    lab.value=eval(lab.value)
}
function removeElement(){
    curr_exp=lab.value
    lab.value=curr_exp.slice(0,-1)
}