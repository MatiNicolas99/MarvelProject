import { VideoModal } from "../components/VideoModal"


export const Main = () => {
    return (
        <>
        <div className="containerglobal">
            <video src="/src/imgs/marvelvideo.mp4" muted loop autoPlay></video>
            <div className="content">
                <div className="textBox">
                    <h2><span>Marvel Studios</span></h2>
                    <p>El Universo cinematográfico de Marvel es una franquicia de medios y un universo compartido, centrada en una serie de películas de superhéroes producidas por Marvel Studios. Las películas están basadas en personajes que aparecen en los cómics estadounidenses publicados por Marvel Comics</p>
                    <VideoModal />
                </div>
            </div>
            </div>
        </>
    )
}
