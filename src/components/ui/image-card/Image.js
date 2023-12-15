export default function Image(props) {
  let {category} = props;

  const directory = `/images/noproductimage/`;

  return <a className={`aspect aspect--bg-grey aspect--square u-d-block`}>
    <img src={`${directory}${category}.png`} alt={`기본 이미지`}/>
  </a>
};