import { useState } from "react";

function Header(props) {

  const { onPlayerLoader } = props;

  const [tag, setTag] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(`/player/${encodeURIComponent(tag)}`);
    const data = await res.json();
    onPlayerLoader(data);
  }

  return (
    <>
      <header className="header">
        <a href="#">
          <img src="/favicon.svg" alt="logo" width="40" height="40" />
          <h1>Brawl Collector</h1>
        </a>
        <form onSubmit={handleSubmit}>
          <input
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            type="text"
            placeholder="Write your tag..."
          />
          <button type="submit">Submit</button>
        </form>
      </header>
    </>
  )
}

export default Header;
