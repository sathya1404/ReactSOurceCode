import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import sneezingwoman from '../sneezingwoman.png'
import protect from '../protect.png'
import closecontact from '../closecontact.png'
import mask from '../mask.png'
import download from '../download.jpg'

function Demo() {
    const [data, setData] = useState([]);
    const [pic, setPic] = useState('')
    const [details, setDetails] = useState([]);
    useEffect(() => {
        //instruction API
        const RAPIDAPI_REQUEST = {
            'X-RapidAPI-Host': 'coronavirus-monitor.p.rapidapi.com'
            , 'X-RapidAPI-Key': '90f46890b6mshde12cba30213785p1606d6jsna9c4122a4c40'
        };
        Axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/random_masks_usage_instructions.php", { headers: RAPIDAPI_REQUEST })
            .then(res => {
                let image = new Blob([res.data], { type: 'image/jpeg' });
                let imageUrl = URL.createObjectURL(image);
                console.log(imageUrl)
                setPic(imageUrl)
            })



        //List of countires API

        const RAPIDAPI_REQUEST_HEADERS = {
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            , 'X-RapidAPI-Key': 'c81aaf7080msh81ddbbfa13356a0p1fa514jsnb933c2593299'
        };
        Axios.get("https://covid-193.p.rapidapi.com/statistics", { headers: RAPIDAPI_REQUEST_HEADERS })
            .then(res => {
                console.log(res.data.response, "data")
                let fill = res.data.response.sort((a, b) => {
                    return a.country > b.country
                })
                setData(fill)

            })
    }, [])
    let handleChange = (e) => {
        let name = e.target.value
        let fill = data.filter(i => i.country === name)
        console.log(fill)
        setDetails(fill)
    }

    function myFunction() {
        document.getElementById("main").style.alignItems = "flex-start";
    }

    return (
        <div className="container">

            <div className="content-wrap">
                <header>
                    <div>
                        <h1>COVID-19  Safety, Updates And Health Tips</h1>
                        <img src={download} alt="" width="1050px" height="400px" />
                    </div>
                </header>


                <div class="main">
                    <div>
                        <form>
                            <button>Country</button>
                            <select id="cars" onChange={handleChange}  >
                            <option value="0">Select a Country</option>
                                
                                {data.map(i => (
                                    <React.Fragment>

                                        <option value={i.country} style={{ height: "200px" }} >{i.country}</option>
                                    </React.Fragment>
                                ))}

                            </select>

                        </form>


                        <div style={{ width: "1090px", height: "200px", backgroundColor: "#c6ffe3", color: "#072b61" }}>

                            {details.length > 0 &&
                                <div>
                                    <h3>{details[0].country}</h3>
                                    <h4>Active Cases :{details[0].cases.active}</h4>
                                    <h4>Total Cases :{details[0].cases.total}</h4>
                                    <h4>Recovered Cases :{details[0].cases.recovered}</h4>
                                    <h4>Critical Cases :{details[0].cases.critical}</h4>
                                </div>}
                            {console.log(details.country, "count")}
                        </div>
                        <div class="container">
                            <div>
                                <h1>Know How it Spreads</h1>
                                <img src={sneezingwoman} alt="" width="150px" height="150px" />
                                <ul><b><li>There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19).</li>
                                    <li>The best way to prevent illness is to avoid being exposed to this virus.</li>
                                    <li>The virus is thought to spread mainly from person-to-person.</li></b> </ul>
                            </div>

                            <iframe width="560" height="315" src="https://www.youtube.com/embed/rAj38E7vrS8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div>
                                <h1>Everyone Should</h1>
                                <img src={protect} alt="" width="150px" height="150px" />
                                <h1>Clean your hands often</h1>
                                <ul><b><li>Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.</li>
                                    <li>If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry.</li>
                                    <li>Avoid touching your eyes, nose, and mouth with unwashed hands.</li> </b>  </ul>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/seA1wbXUQTs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                            <div>
                                <img src={closecontact} alt="" width="150px" height="150px" />
                                <h1>Avoid close contact</h1>
                                <ul><b><li>Avoid close contact with people who are sick Stay home as much as possible.pdf iconexternal icon
                                Put distance between yourself and other people.</li>
                                    <li>Remember that some people without symptoms may be able to spread virus.</li>
                                    <li> Keeping distance from others is especially important for people who are at higher risk of getting very sick.</li></b></ul>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/-NHDnpTmUjo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <div>
                            <img src={mask} alt="" width="150px" height="150px" />
                            <h1>Cover your mouth and nose with a cloth face cover when around others</h1>
                            <b><ul><li>You could spread COVID-19 to others even if you do not feel sick.</li>
                                <li>Everyone should wear a cloth face cover when they have to go out in public, for example to the grocery store or to pick up other necessities.</li>
                                <li> Cloth face coverings should not be placed on young children under age 2, anyone who has trouble breathing, or is unconscious,
                     incapacitated or otherwise unable to remove the mask without assistance.</li>
                                <li>The cloth face cover is meant to protect other people in case you are infected.</li>
                                <li>Do NOT use a facemask meant for a healthcare worker.</li>
                                <li>  Continue to keep about 6 feet between yourself and others. The cloth face cover is not a substitute for social distancing.</li></ul></b>
                                </div>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/ywtaoKO8X5s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Demo