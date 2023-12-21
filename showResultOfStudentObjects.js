let stu=[{
    name:"Das",
    roll:"A01",
    subject:[{name:"beng",mark:50},{name:"eng",mark:40},{name:"hist",mark:60},{name:"geo",mark:56}]
},
{
    name:"Mandal",
    roll:"A02",
    subject:[{name:"beng",mark:40},{name:"eng",mark:35},{name:"hist",mark:42},{name:"geo",mark:32}]
},
{
    name:"Dey",
    roll:"A03",
    subject:[{name:"beng",mark:52},{name:"eng",mark:57},{name:"hist",mark:66},{name:"geo",mark:68}]
}
]

function result()
{
    let total=0;
    let r="";
    for(let i=0;i<this.subject.length;i++)
    {
        total+=this.subject[i].mark
    }
    let avg=total/this.subject.length
    if(avg>60)r="1st";
    if(avg<60 && avg>50)r="2nd";
    if(avg<50 && avg>40)r="3rd"
   if(avg<40)
    r="Fail"
    this.total=total
    this.result=r
}

for(let i=0;i<stu.length;i++)
{
    result.call(stu[i])
}
console.log(stu)