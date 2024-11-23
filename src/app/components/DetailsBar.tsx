import DetailsItem from "./DetailsItem"


const DetailsBar = () => {
  return (
    <div className="border border-slate-400 rounded-lg *:border-b-2 flex flex-col lg:flex-row justify-evenly lg:*:border-r-2 lg:*:border-b-0 col-span-2">
        <DetailsItem />
        <DetailsItem />
        <DetailsItem />
        <DetailsItem className="!border-r-0" />
    </div>
  )
}
export default DetailsBar