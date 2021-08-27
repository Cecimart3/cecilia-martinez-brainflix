import UploadThumbnail from "./UploadThumbnail/UploadThumbail";

const UploadVideo = () => {
    return (
        <section>
            <UploadThumbnail />
            <form>
                <h4>TITLE YOUR VIDEO</h4>
                <input type='text' placeholder='Add a title to your video' />
                <h4>ADD A VIDEO DESCRIPTION</h4>
                <textarea>Add a description of your video</textarea>
            </form>
        </section>
        

    )
}

export default UploadVideo;