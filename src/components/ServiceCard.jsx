export default function ServiceCard({ id, title, description }) {
  return (
    <div className="card">
      <div className="card-icon">{id}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}