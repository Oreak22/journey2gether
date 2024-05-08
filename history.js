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


locationdata.map((i,e)=> filterss.innerHTML +=`<option value="${i.place}">${i.place}</option>`
)


const hesy = JSON.parse(localStorage.histy)

showhis.innerHTML =''
hesy.map((i,e)=>
    showhis.innerHTML += `<div class="classoftravle tick histick" >
    <h5>Journey2gether</h5>
    <h6>${i.ticktype=== 'bis'?'Buisness':i.ticktype=== 'vip'?'Vip':'Normal' }</h6>
    
    <h3>My Booked Ticket</h3>
    <div class="tickinfo">
        <div><h4>Journey from:</h4><small id="Journeyfrom">${i.from}</small></div>
        <div><h4>Journey to:</h4><small id="Journeyto">${i.jto}</small></div><div><h4>Travle time:</h4><small id="traveltime">${i.travletime}</small></div>
        <div><h4>Booked on:</h4><small id="bookedon">${i.bookedon}</small></div>
    </div>
    <div class="tickinfo">
        <div><h4>Distance of travle:</h4><small id="distance">${i.distance}</small></div>
        <div><h4>How many ticket:</h4><small id="nt">${i.nonftick}</small></div>
        <div><h4>Cost nof travle (#):</h4><small id="costoftick">${i.costoftick}</small></div>
        <div><h4>Tickect ref no:</h4><small id="trn">${i.trn}</small></div>
    </div>
    <div class="tickinfo">
        
        <div id="knowtype">
            <button id="buyt" class="contactbtn">PRINT</button>
        </div>
    </div>
    
</div>`
)
// const filterss = document.getElementById('showhis')

filterss.addEventListener('change',()=>{
    // .
    if(filterss.value==='all'){
        locationdata.map((i,e)=> filterss.innerHTML +=`<option value="${i.place}">${i.place}</option>`
        )
        
        
        const hesy = JSON.parse(localStorage.histy)
        
        showhis.innerHTML =''
        hesy.map((i,e)=>
            showhis.innerHTML += `<div class="classoftravle tick histick" >
            <h5>Journey2gether</h5>
            <h6>${i.ticktype=== 'bis'?'Buisness':i.ticktype=== 'vip'?'Vip':'Normal' }</h6>
            
            <h3>My Booked Ticket</h3>
            <div class="tickinfo">
                <div><h4>Journey from:</h4><small id="Journeyfrom">${i.from}</small></div>
                <div><h4>Journey to:</h4><small id="Journeyto">${i.jto}</small></div><div><h4>Travle time:</h4><small id="traveltime">${i.travletime}</small></div>
                <div><h4>Booked on:</h4><small id="bookedon">${i.bookedon}</small></div>
            </div>
            <div class="tickinfo">
                <div><h4>Distance of travle:</h4><small id="distance">${i.distance}</small></div>
                <div><h4>How many ticket:</h4><small id="nt">${i.nonftick}</small></div>
                <div><h4>Cost nof travle (#):</h4><small id="costoftick">${i.costoftick}</small></div>
                <div><h4>Tickect ref no:</h4><small id="trn">${i.trn}</small></div>
            </div>
            <div class="tickinfo">
                
                <div id="knowtype">
                    <button id="buyt" class="contactbtn">PRINT</button>
                </div>
            </div>
            
        </div>`
        )
    }else{
        let fllt= JSON.parse(localStorage.histy).filter((i,e)=>i.from  ===filterss.value)
    

    if(fllt.length == 0){
        showhis.innerHTML ='No record'
    }else{
        showhis.innerHTML =''
    console.log(fllt)
    fllt.map((i,e)=>
    showhis.innerHTML += `<div class="classoftravle tick histick" >
    <h5>Journey2gether</h5>
    <h6>${i.ticktype=== 'bis'?'Buisness':i.ticktype=== 'vip'?'Vip':'Normal' }</h6>
    
    <h3>My Booked Ticket</h3>
    <div class="tickinfo">
        <div><h4>Journey from:</h4><small id="Journeyfrom">${i.from}</small></div>
        <div><h4>Journey to:</h4><small id="Journeyto">${i.jto}</small></div><div><h4>Travle time:</h4><small id="traveltime">${i.travletime}</small></div>
        <div><h4>Booked on:</h4><small id="bookedon">${i.bookedon}</small></div>
    </div>
    <div class="tickinfo">
        <div><h4>Distance of travle:</h4><small id="distance">${i.distance}</small></div>
        <div><h4>How many ticket:</h4><small id="nt">${i.nonftick}</small></div>
        <div><h4>Cost nof travle (#):</h4><small id="costoftick">${i.costoftick}</small></div>
        <div><h4>Tickect ref no:</h4><small id="trn">${i.trn}</small></div>
    </div>
    <div class="tickinfo">
        
        <div id="knowtype">
            <button id="buyt" class="contactbtn">PRINT</button>
        </div>
    </div>
    
</div>`
)
    }

    }
    

})