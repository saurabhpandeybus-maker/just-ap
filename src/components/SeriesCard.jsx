export const SeriesCard = ({ data }) => {
  const { img_src, name, rating, genre, summary, watch_url, watch_now_text } = data;

  return (
    <div className="series-card">
      <img src={img_src} alt={name} className="series-img" />
      <h2>{name}</h2>
      <p><strong>Rating:</strong> {rating}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p style={{margin:"1.2rem 0"}}>{summary}</p>
      <a href={watch_url} target="_blank" rel="noopener noreferrer" className="btn">
        {watch_now_text}
      </a>
    </div>
  );
};
