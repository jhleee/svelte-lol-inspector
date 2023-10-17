import axios from "axios";


export async function getConfig() {
    let { data } = await axios.get("https://ddragon.leagueoflegends.com/api/versions.json");
    let d = {};
    d.version = data[0];
    return d;
}
