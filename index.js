let mobileNav=false
const toggbtn =(conId,oId,nId, )=>{
    let butt = document.getElementById(conId)
    if(!mobileNav){
        butt.setAttribute('class',nId)
        mobileNav=true
    }else{
        butt.setAttribute('class',oId)
        mobileNav=false
    }
}

const testingss=()=>{
    toggbtn("mobileNav","navigationcontainclose","navigationcontain")
}

const topnav=()=>{
    toggbtn("closeTop","topnav","ddnone")
    // toggbtn("openTop","ddnone","topnavclosed")
}
const opentopnav=()=>{
}




const classinfo=(btn1,btn2,btn3,locd1,locd2,locd3)=>{
    const loc = document.getElementById(locd1)
    const locbtn =document.getElementById(btn1)
    const loc2 = document.getElementById(locd2)
    const loc3 = document.getElementById(locd3)
    const locbtn2 =document.getElementById(btn2)
    const locbtn3 =document.getElementById(btn3)
    loc.setAttribute('class','travleexplain')
    loc2.setAttribute('class','ddnone')
    loc3.setAttribute('class','ddnone')
    locbtn.setAttribute('class','contactbtn ex3 classactive')
    locbtn2.setAttribute('class','contactbtn ex3')
    locbtn3.setAttribute('class','contactbtn ex3 ')

}

const fvip=()=>{
    classinfo('btn3','btn2','btn3','vip','normal','buisness')
}
const fnormal=()=>{
    classinfo('btn1','btn2','btn3','normal','vip','buisness')
}
const fbuisness=()=>{
    classinfo('btn2','btn1','btn3','buisness','normal','vip')
}