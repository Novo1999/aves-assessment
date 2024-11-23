const DetailsItem = ({className}: {className?: string}) => {
    return (
        <div className={`flex justify-between items-center p-4 w-full ${className || ""}`}>
            <div>
                <p className="text-slate-400">Total Apartment</p>
                <div className="text-xl font-bold text-black">130</div>
            </div>
            <div>
                icon
            </div>
        </div>
    )
}
export default DetailsItem
