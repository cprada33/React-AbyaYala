import Cabanas from "../Components/Cabanas"
import Banner from "../Components/Home/Banner"
import Location from "../Components/Location"
import ImageList from "../Components/ImageList"
import itemData from "../assets/bannerHome.json"


const HomeView = () => {

  return (
    <>
    <Banner/>
    <Cabanas/>
    <div className="banner-fotos">
    <ImageList fotos = {itemData}/>
    </div>
    <Location/>
    </>
  )
}

export default HomeView