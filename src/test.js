


export default function App() {

const url = "https://app.sportdataapi.com/api/v1/soccer/players?apikey=1c187aa0-8b67-11ec-aa25-69d0f7a297e9&country_id=13"
const [sportData, setsportData] = useState ([]);
const [playerName, setplayerName] = useState ("");
const [toggle, settoggle] = useState(true);

const apiCall = () => {
  fetch(url)
  .then((response) => response.json())
  .then(data => setsportData(data))
  .catch(() => console.log("No funciona!"));
}

useEffect(() => {
  apiCall();
  
}, []);
console.log(sportData)
  return (
    <div>
      <h2>Hola!</h2>
    </div>
  )
}