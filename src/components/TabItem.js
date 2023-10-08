function TabItem(pros) {
  return (
    <li className="concept">
      <div>
        <img src={pros.image} alt="TODO: TITLE" />
        <h2>{pros.title}</h2>
        <p>{pros.description}</p>
      </div>
    </li>
  );
}
export default TabItem;
