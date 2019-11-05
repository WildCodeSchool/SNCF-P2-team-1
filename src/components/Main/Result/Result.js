import React from "react";
import ResultCard from "./ResultCard/ResultCard";
import { connect, useSelector } from "react-redux";
import LoadingComponent from "./Cliploader";

function Result() {
  const receiveData = useSelector(state => state.reducerGlobal.receiveData);
  const showLoading = useSelector(state => state.reducerGlobal.showLoading);

  return (
    <>
      {showLoading ? (
        <div>
          <LoadingComponent />
        </div>
      ) : null}
      {receiveData && <ResultCard />}
    </>
  );
}

export default connect(
  null,
  null
)(Result);

curl 'https://www.transilien.com/api/itinerary/search' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Origin: https://www.transilien.com' -H 'Accept-Encoding: gzip, deflate, br' -H 'Accept-Language: fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.120 Safari/537.36' -H 'Content-Type: application/json;charset=UTF-8' -H 'Accept: application/json, text/plain, */*' -H 'Referer: https://www.transilien.com/itinerary/search/?departure=Villepinte&arrival=GARGES+SARCELLES+(Garges-l%C3%A8s-Gonesse)+(Sarcelles)&departureId=admin%3Afr%3A93078&arrivalId=stop_area%3ADUA%3ASA%3A8727619&departureLatitude=48.963656&departureLongitude=2.534754&arrivalLatitude=48.976973&arrivalLongitude=2.390714&date=2019-11-05&time=14%3A42&dateType=DEPARTURE&preferenceJourney=FASTEST&mode=LIST' -H 'Cookie: TRIPRD6TRIANSP61=triansp61tri; TRIPRD6WAS=triansp61esi; TRI_city=SDN_PRD6; has_js=1; _ga=GA1.2.1397554470.1570542011; TCPID=1191021540278164810720; TC_OPTOUT=0@@@009@@@ALL; usbls=1; _cs_c=2; _gid=GA1.2.2090467632.1572951032; _JSESSIONID=CDEDDA56B00ED14986A0CF068AA565E4; _gat_UA-19711994-9=1; _gat_tracker1=1; _cs_id=e730badf-5461-a026-f7ce-0646cd94ec03.1570542035.34.1572961363.1572959921.1.1604706035969; _cs_s=5.1' -H 'Connection: keep-alive' --data-binary '{"departure":"Villepinte","arrival":"GARGES SARCELLES (Garges-lès-Gonesse) (Sarcelles)","departureId":"admin:fr:93078","arrivalId":"stop_area:DUA:SA:8727619","departureLatitude":48.963656,"departureLongitude":2.534754,"arrivalLatitude":48.976973,"arrivalLongitude":2.390714,"date":"2019-11-05","time":"14:42","dateType":"DEPARTURE","bypassModes":[],"bypassLines":[],"preferenceJourney":"FASTEST"}' --compressed