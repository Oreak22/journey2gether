let mobileNav=false
sessionStorage.classt ='bis'
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
    classinfo('btn3','btn2','btn1','vip','normal','buisness')
    sessionStorage.classt= 'vip'
    typetic.value= "vip"

}
const fnormal=()=>{
    classinfo('btn1','btn2','btn3','normal','vip','buisness')
    sessionStorage.classt= 'nor'
    
    typetic.value= "nor"
}
const fbuisness=()=>{
    classinfo('btn2','btn1','btn3','buisness','normal','vip')
    sessionStorage.classt= 'bis'

    typetic.value= "bis"
}
const knowtype = document.getElementById('typetic')
knowtype.addEventListener("change",()=>{
    if(typetic.value==='bis'){
        fbuisness()
    }else if(typetic.value==='vip'){
        fvip()
    }else if(typetic.value==='nor'){
        fnormal()
    }
})
const locationdata=[
    {place:'Oyo', distance:150},
    {place:'Abia', distance:1000},
    {place:'Adamawa', distance:1100},
    {place:'Uyo', distance:1700},
    {place:'Anambra', distance:1300},
    {place:'Benue', distance:1900},
    {place:'Cross-river', distance:1100},
    {place:'Delta', distance:500},
    {place:'Edo', distance:700},
    {place:'Ekiti', distance:800},
    {place:'Kastina', distance:850},
    {place:'Kebi', distance:750},
    {place:'Gonmbe', distance:1150},
    {place:'Oweri', distance:1250},
    {place:'Lagos', distance:550},
    {place:'Nasarwa', distance:1150},
]


const realdata= locationdata.sort((a,b)=> a.place.localeCompare(b.place, undefined, {sensitivity:'base'}) )


// const listlocation=()=>{

    // fromt.innerHTML=

locationdata.map((i,e)=>{
    fromt.innerHTML +=`<option value="${i.place}">${i.place}</option>`
})

const listlocation=()=>{
    realdata.map((i,e)=>{
        if(fromt.value===''){
            return
        }else{
            tot.innerHTML +=`<option value="${i.place}">${i.place}</option>`
        }
})
}

// const onloadbody=()=>{
//     listlocation()
//     listlocati2n2()
// }
var fromdis =''
var tos=0
// 
var tam =1
var genrand =''
var bookon =''
var cot =''
var dittav =''
var booked =''


const selects1 = document.getElementById('fromt')
const select2 = document.getElementById('tot')
selects1.addEventListener('change',()=>{
    listlocation()
    Journeyfrom.innerHTML= fromt.value
    Journeyto.innerHTML= tot.value
    fromdis= realdata.find((i,e)=>i.place===fromt.value).distance
    distance.innerHTML = fromdis + tos + ' km'
    const newdate = new Date
    booked=`${newdate.getDate()}/${newdate.getMonth()+1}/${newdate.getFullYear()}`
    bookedon.innerHTML= booked
    if(fromt.value.length||tot.value.length||tickamounts.value.length
        ||travledate.value.length ==0){
            document.getElementById('buyt').setAttribute('disabled',true)
        }else{
            document.getElementById('buyt').removeAttribute('disabled')
            document.getElementById('buyt').style.backgroundColor = '#3E5CB8'
        }
    // costoftick.innerHTML= (fromdis+tos)* tam
})
select2.addEventListener('change',()=>{
    Journeyto.innerHTML= tot.value
    tos = realdata.find((i,e)=>i.place===tot.value).distance
    distance.innerHTML=fromdis+ tos +" km"
    costoftick.innerHTML= (fromdis+tos)* tam
    if(fromt.value.length||tot.value.length||tickamounts.value.length
        ||travledate.value.length ==0){
            document.getElementById('buyt').setAttribute('disabled',true)
        }else{
            document.getElementById('buyt').removeAttribute('disabled')
            document.getElementById('buyt').style.backgroundColor= '#3E5CB8'
        }
})
const tdate = document.getElementById('travledate')
tdate.addEventListener('change',()=>{
    traveltime.innerHTML=travledate.value
    costoftick.innerHTML= (fromdis+tos)* tam
    const genrndom = ()=>{
        return Math.random().toString(36).slice(-10)
    }
    genrand="j2gd" + genrndom()
    trn.innerHTML= genrand
    if(fromt.value.length.length||tot.value.length.length||tickamounts.value.length.length
        ||travledate.value.length.length ==0){
            document.getElementById('buyt').setAttribute('disabled',true)
        }else{
            document.getElementById('buyt').removeAttribute('disabled')
            document.getElementById('buyt').style.backgroundColor= '#3E5CB8'
        }
})
const tickamount = document.getElementById('tickamounts')
tickamount.addEventListener('change',()=>{
    nt.innerHTML=tickamounts.value
    tam= tickamounts.value
    costoftick.innerHTML= (fromdis+tos)* tam
    if(fromt.value.length||tot.value.length||tickamounts.value.length
        ||travledate.value.length ==0){
            document.getElementById('buyt').setAttribute('disabled',true)
        }else{
            document.getElementById('buyt').removeAttribute('disabled')
            document.getElementById('buyt').style.backgroundColor= '#3E5CB8'
        }
        
})

// console.log(sessionStorage.classt)
const confirmtravle=()=>{
    const from=fromt.value
    const jto=tot.value
    const travletime = tickamounts.value
    const bookedon=booked
    const distance=fromdis+ tos
    const nooftick=tickamounts.value
    const costoftick=(fromdis+tos)* tam
    const trn=genrand
    const ticktype=typetic.value
    const newtick = {from,jto,travletime,bookedon,distance,nooftick,costoftick,trn,ticktype}
    // console.log(newtick)
    if(localStorage.histy){
        var updateddata = JSON.parse(localStorage.histy)
        updateddata.push(newtick)
        localStorage.histy=JSON.stringify(updateddata)
        console.log(updateddata)
        listlocation()
        fromt.value=''
        tot.value.length=''
        tickamounts.value=''
        travledate.value='' 
        // localStorage.histy=
        document.getElementById('buyt').setAttribute('disabled',true)
        document.getElementById('buyt').style.backgroundColor= '#777e90'

    }else{
        let datta =[]
        datta.push(newtick)
        localStorage.histy= JSON.stringify(datta)
        console.log(localStorage.histy)
        fromt.value=''
        tot.value.length=''
        tickamounts.value=''
        travledate.value='' 
        document.getElementById('buyt').setAttribute('disabled',true)
        document.getElementById('buyt').style.backgroundColor= '#777e90'
    }

}
//  history
// filters.innerHTML='/'
