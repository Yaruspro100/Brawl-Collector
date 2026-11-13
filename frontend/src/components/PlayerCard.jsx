import trophyIcon from '../assets/icons/icon_trophy.png';

function PlayerCard(props) {

  const { player } = props;

  if (!player) {
    return null;
  }

  return (
    <>
      <div className="player-header">
        <img className="player-icon" src={player.iconUrl} alt={player.name} />
        <h2 className="player-nickname">{player.name}</h2>
        <button className="player-tag">{player.tag}</button>
        <span className="trophies-amount">{player.trophies}</span>
        <img className="trophies-icon" src={trophyIcon} alt="trophies" />
      </div>
    </>
  )
}

export default PlayerCard;
