function Result({ correct }) {
  return (
    <div className="result">
      <img src="img/congratulation.jpg" alt="congratulation"></img>
      <h2>You know {correct} out of 10 questions</h2>
      <a href="/">
        <button className="btn-result">To other tests</button>
      </a>
    </div>
  );
}

export default Result;
