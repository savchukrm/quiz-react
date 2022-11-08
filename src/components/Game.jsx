function Game({ question, onClickVariant, step }) {
  const arr = new Array(10).fill(1);
  const percentage = Math.round((step / arr.length) * 100);

  return (
    <>
      <div className="gameBlock">
        <div className="progress">
          <div
            style={{ width: `${percentage}%` }}
            className="progress__inner"
          ></div>
        </div>
        <h2>{question.title}</h2>
        <ul>
          {question.variants.map((text, index) => (
            <li onClick={() => onClickVariant(index, question)} key={text}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Game;
