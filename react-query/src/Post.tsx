export default function Post({ data }) {
    return (
        <div className="card">
            <div className="card-title">{data.author}</div>
            <img 
                src={data.download_url} 
                alt={data.author}
                width="200" />
        </div>
    )
}