import Image from "next/image";
// import nextImg from "../../assets/Rahe Jannat.jpg"
import nextImg from "../../../assets/Rahe Jannat.jpg"


// import nextImg from "@/assets/Rahe Jannat.jpg" ,,, eta dile evave o deoa jai ---> "<Image src={nextImg}"

const GalleryPage = () => {
    return (
        <div className="text-center">
            <h1>Regular Image Tag</h1>
            {/* <img src="https://www.zhuravkovigor.com/assests/next-js-optimizations.png" */}
            <img src="https://innovar-orpin.vercel.app/assets/images/inner-pages/inner-img-02.jpg"
                alt=""
                width={500}
                height={500}
                className="mx-auto" />

            {/* Next Js e Image set korar rules */}
            <h1>NextJs Image Component</h1>
            <Image src="https://innovar-orpin.vercel.app/assets/images/inner-pages/image-07.jpg"
                alt="Next Image"
                width={500}
                height={500}
                className="mx-auto" />

            <h1>Local assests NextJs Image Component</h1>
            <Image src={nextImg}
                alt="Next Image"
                width={500}
                height={500}
                className="mx-auto" />

            <h1>Public NextJs Image Component</h1>
            <Image src={nextImg}
                // alt="/public/Rahe Jannat.jpg"
                alt="/Rahe Jannat.jpg"
                width={500}
                height={500}
                className="mx-auto" />
        </div>
    );
};

export default GalleryPage;