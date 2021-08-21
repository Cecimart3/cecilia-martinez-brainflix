
const Comments = ({ selectedVideo }) => {
    return (
        <ul> 
            {selectedVideo.comments.map(CommentComponent)}
        </ul>
    )
}

const CommentComponent = (comment) => {
    return ( 
        <li key={comment.id}>
            <div className='icon'></div>
            <div>
                <div>
                    <h4>{comment.name}</h4>
                    <h5>{comment.timestamp}</h5>
                </div>
                <p>{comment.comment}</p>
            </div>
        </li>
    )
}

export default Comments;