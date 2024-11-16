

 export const RevenueCard = ({
    title,
    showWarning,
    oderCount,
    amount,
 }) => {
return (
    <>
    
    <div className="bg-white rounded shadow-sm p-1 " >
        <div className="text-gray-700" >
        {title}
        ?
        </div>
    
<div className="flex justify-between " >
    <div>
    ${amount}
    </div>
    {oderCount ? <div className="flex" >
<div className="text-blue-300">
    {oderCount} order(s)
</div>
        </div> : null
        }
</div>
</div>
    
    </>
)

 }