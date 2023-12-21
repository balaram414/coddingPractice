let arr=[1,2,3,4,5,6,]

function submaxval(arr){
    let max=0;;
let inx1=0;
let inx2=0;
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr.length;j++)
    {
        if(i!=j)
        {
            let total=arr[i]+arr[j]
            if(max<total)
            {max=total;
            inx1=i
            inx2=j
            }
        }
    }
}
console.log("inx1: "+inx1+"   inx2:"+inx2)
console.log("Val1:"+arr[inx1]+"  val2:"+arr[inx2])
}
submaxval(arr)