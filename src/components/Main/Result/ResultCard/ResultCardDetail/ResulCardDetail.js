import React from "react";
import _get from "lodash";

function ResultCardDetail() {
  const data = {
    journeys: [
      {
        dateDeparture: "2019-11-06T10:37:00",
        dateArrival: "2019-11-06T10:44:00",
        totalDuration: "PT7M",
        walkingDuration: "PT0S",
        nbTransfer: 0,
        co2EmissionByTrain: { unit: "gEC", value: 8.085 },
        co2EmissionByCar: { unit: "gEC", value: 549.7779065038 },
        price: 190.0,
        zones: { min: 1, max: 1 },
        sections: [
          {
            totalDuration: "PT7M",
            type: "TRANSPORT",
            departure: {
              label: "Montparnasse-Bienvenue (Paris)",
              dateTime: "2019-11-06T10:37:00"
            },
            arrival: {
              label: "Porte d'Orléans (Général Leclerc) (Paris)",
              dateTime: "2019-11-06T10:44:00"
            },
            direction: "Mairie de Montrouge (Montrouge)",
            color: "#CF009E",
            textColor: "#FFFFFF",
            transport: {
              mode: "METRO",
              line: { label: "4", code: "METRO_4" },
              substitution: false
            },
            codeMission: null,
            listServedStation: [
              {
                stationLabel: "Montparnasse-Bienvenue (Paris)",
                arrivalDate: "2019-11-06T10:37:00"
              },
              {
                stationLabel: "Vavin (Paris)",
                arrivalDate: "2019-11-06T10:38:00"
              },
              {
                stationLabel: "Raspail (Paris)",
                arrivalDate: "2019-11-06T10:39:00"
              },
              {
                stationLabel: "Denfert-Rochereau (Paris)",
                arrivalDate: "2019-11-06T10:40:00"
              },
              {
                stationLabel: "Mouton-Duvernet (Paris)",
                arrivalDate: "2019-11-06T10:41:00"
              },
              {
                stationLabel: "Alésia (Paris)",
                arrivalDate: "2019-11-06T10:42:00"
              },
              {
                stationLabel: "Porte d'Orléans (Général Leclerc) (Paris)",
                arrivalDate: "2019-11-06T10:44:00"
              }
            ],
            disruptionsTrafic: [],
            disruptionsTravaux: []
          }
        ],
        route: [
          {
            type: "LineString",
            coordinates: [
              [2.324441, 48.844189],
              [2.328867, 48.84206],
              [2.330474, 48.839157],
              [2.332204, 48.834277],
              [2.330407, 48.832192],
              [2.326827, 48.828066],
              [2.325073, 48.822817]
            ],
            properties: {
              sectionIndex: 0,
              color: "#CF009E",
              type: "public_transport"
            }
          }
        ],
        routeInfo: { tooltipCoord: { lat: 48.8332345, lon: 2.3313055 } }
      },
      {
        dateDeparture: "2019-11-06T10:39:00",
        dateArrival: "2019-11-06T10:46:00",
        totalDuration: "PT7M",
        walkingDuration: "PT0S",
        nbTransfer: 0,
        co2EmissionByTrain: { unit: "gEC", value: 8.085 },
        co2EmissionByCar: { unit: "gEC", value: 549.7779065038 },
        price: 190.0,
        zones: { min: 1, max: 1 },
        sections: [
          {
            totalDuration: "PT7M",
            type: "TRANSPORT",
            departure: {
              label: "Montparnasse-Bienvenue (Paris)",
              dateTime: "2019-11-06T10:39:00"
            },
            arrival: {
              label: "Porte d'Orléans (Général Leclerc) (Paris)",
              dateTime: "2019-11-06T10:46:00"
            },
            direction: "Mairie de Montrouge (Montrouge)",
            color: "#CF009E",
            textColor: "#FFFFFF",
            transport: {
              mode: "METRO",
              line: { label: "4", code: "METRO_4" },
              substitution: false
            },
            codeMission: null,
            listServedStation: [
              {
                stationLabel: "Montparnasse-Bienvenue (Paris)",
                arrivalDate: "2019-11-06T10:39:00"
              },
              {
                stationLabel: "Vavin (Paris)",
                arrivalDate: "2019-11-06T10:39:00"
              },
              {
                stationLabel: "Raspail (Paris)",
                arrivalDate: "2019-11-06T10:41:00"
              },
              {
                stationLabel: "Denfert-Rochereau (Paris)",
                arrivalDate: "2019-11-06T10:42:00"
              },
              {
                stationLabel: "Mouton-Duvernet (Paris)",
                arrivalDate: "2019-11-06T10:43:00"
              },
              {
                stationLabel: "Alésia (Paris)",
                arrivalDate: "2019-11-06T10:44:00"
              },
              {
                stationLabel: "Porte d'Orléans (Général Leclerc) (Paris)",
                arrivalDate: "2019-11-06T10:46:00"
              }
            ],
            disruptionsTrafic: [],
            disruptionsTravaux: []
          }
        ],
        route: [
          {
            type: "LineString",
            coordinates: [
              [2.324441, 48.844189],
              [2.328867, 48.84206],
              [2.330474, 48.839157],
              [2.332204, 48.834277],
              [2.330407, 48.832192],
              [2.326827, 48.828066],
              [2.325073, 48.822817]
            ],
            properties: {
              sectionIndex: 0,
              color: "#CF009E",
              type: "public_transport"
            }
          }
        ],
        routeInfo: { tooltipCoord: { lat: 48.8332345, lon: 2.3313055 } }
      },
      {
        dateDeparture: "2019-11-06T10:36:00",
        dateArrival: "2019-11-06T11:16:42",
        totalDuration: "PT40M42S",
        walkingDuration: "PT40M42S",
        nbTransfer: 0,
        co2EmissionByTrain: { unit: "", value: 0.0 },
        co2EmissionByCar: { unit: "gEC", value: 549.7779065038 },
        price: null,
        zones: null,
        sections: [
          {
            totalDuration: "PT40M42S",
            type: "WALKING",
            departure: {
              label: "GARE DE PARIS MONTPARNASSE (Paris)",
              dateTime: "2019-11-06T10:36:00"
            },
            arrival: {
              label: "PORTE D'ORLEANS (Paris)",
              dateTime: "2019-11-06T11:16:42"
            },
            transport: { mode: "WALKING", line: null, substitution: false },
            walkingDistance: 2594,
            path: [
              { length: 118, name: "Rue de l'Arrivée" },
              { length: 94, name: "Place du 18 Juin 1940" },
              { length: 28, name: "Rue du Départ" },
              { length: 213, name: "Rue d'Odessa" },
              { length: 326, name: "Rue de la Gaîté" },
              { length: 1193, name: "Avenue du Maine" },
              { length: 41, name: "Place Victor et Hélène Basch" },
              { length: 510, name: "Avenue du Général Leclerc" },
              { length: 71, name: "Place du 25 Août 1944" }
            ]
          }
        ],
        route: [
          {
            type: "LineString",
            coordinates: [
              [2.321258, 48.842294],
              [2.321258, 48.842294],
              [2.321309, 48.842299],
              [2.321359, 48.842315],
              [2.321406, 48.842336],
              [2.321872, 48.842703],
              [2.321865, 48.842808],
              [2.321865, 48.842808],
              [2.321865, 48.842808],
              [2.32192, 48.842852],
              [2.321909, 48.842973],
              [2.321909, 48.842973],
              [2.322287, 48.84328],
              [2.322287, 48.84328],
              [2.322828, 48.843719],
              [2.322876, 48.843757],
              [2.322927, 48.843794],
              [2.322927, 48.843794],
              [2.322985, 48.843803],
              [2.323037, 48.8438],
              [2.323088, 48.843785],
              [2.323157, 48.843748],
              [2.323681, 48.843468],
              [2.3238, 48.843409],
              [2.324007, 48.843439],
              [2.324007, 48.843439],
              [2.324058, 48.843299],
              [2.324016, 48.843192],
              [2.324016, 48.843192],
              [2.324089, 48.843167],
              [2.324172, 48.843127],
              [2.324172, 48.843127],
              [2.324242, 48.843097],
              [2.324319, 48.843151],
              [2.324319, 48.843151],
              [2.32479, 48.841439],
              [2.324871, 48.841273],
              [2.324871, 48.841273],
              [2.324813, 48.841202],
              [2.324741, 48.841112],
              [2.324741, 48.841112],
              [2.324688, 48.84105],
              [2.324317, 48.840591],
              [2.324317, 48.840591],
              [2.324276, 48.84054],
              [2.324276, 48.84054],
              [2.324227, 48.840479],
              [2.324209, 48.840457],
              [2.323553, 48.839652],
              [2.323553, 48.839652],
              [2.323459, 48.839534],
              [2.323429, 48.839496],
              [2.323429, 48.839496],
              [2.322688, 48.838597],
              [2.322619, 48.838514],
              [2.322619, 48.838514],
              [2.322801, 48.838103],
              [2.32289, 48.837908],
              [2.322906, 48.83759],
              [2.322906, 48.83759],
              [2.322925, 48.837555],
              [2.322925, 48.837555],
              [2.323008, 48.837398],
              [2.323189, 48.83696],
              [2.323246, 48.836822],
              [2.323246, 48.836822],
              [2.323354, 48.836572],
              [2.323495, 48.836209],
              [2.323495, 48.836209],
              [2.323641, 48.835815],
              [2.323767, 48.835498],
              [2.323767, 48.835498],
              [2.32394, 48.835088],
              [2.32394, 48.835088],
              [2.324246, 48.834332],
              [2.324246, 48.834332],
              [2.324322, 48.83414],
              [2.324322, 48.83414],
              [2.324394, 48.833956],
              [2.324472, 48.833765],
              [2.324472, 48.833765],
              [2.324536, 48.833612],
              [2.324619, 48.833417],
              [2.324619, 48.833417],
              [2.324712, 48.833181],
              [2.324797, 48.832964],
              [2.324797, 48.832964],
              [2.32486, 48.832821],
              [2.324913, 48.832681],
              [2.324913, 48.832681],
              [2.324998, 48.832478],
              [2.324998, 48.832478],
              [2.325084, 48.832236],
              [2.325152, 48.832043],
              [2.325248, 48.831827],
              [2.325248, 48.831827],
              [2.32531, 48.831653],
              [2.32538, 48.831483],
              [2.32538, 48.831483],
              [2.3259, 48.830262],
              [2.3259, 48.830262],
              [2.325971, 48.830081],
              [2.326127, 48.829706],
              [2.326127, 48.829706],
              [2.326306, 48.829266],
              [2.326401, 48.829036],
              [2.326401, 48.829036],
              [2.326588, 48.828626],
              [2.326724, 48.828334],
              [2.326766, 48.828252],
              [2.32678, 48.828222],
              [2.32678, 48.828222],
              [2.326854, 48.828048],
              [2.326854, 48.828048],
              [2.32691, 48.828041],
              [2.326962, 48.828024],
              [2.326962, 48.828024],
              [2.327019, 48.827986],
              [2.32705, 48.827937],
              [2.327051, 48.827884],
              [2.327022, 48.827834],
              [2.327022, 48.827834],
              [2.326999, 48.827814],
              [2.326972, 48.827798],
              [2.32694, 48.827785],
              [2.326905, 48.827775],
              [2.326905, 48.827775],
              [2.32684, 48.827615],
              [2.32684, 48.827615],
              [2.326808, 48.827544],
              [2.326794, 48.827511],
              [2.326794, 48.827511],
              [2.32675, 48.827403],
              [2.326536, 48.826903],
              [2.326536, 48.826903],
              [2.326495, 48.826802],
              [2.326437, 48.826634],
              [2.326437, 48.826634],
              [2.326358, 48.826383],
              [2.326289, 48.826127],
              [2.326174, 48.825619],
              [2.326174, 48.825619],
              [2.326007, 48.824909],
              [2.325972, 48.824761],
              [2.325972, 48.824761],
              [2.325955, 48.82469],
              [2.325955, 48.82469],
              [2.325893, 48.824441],
              [2.325893, 48.824441],
              [2.325867, 48.824319],
              [2.325769, 48.823907],
              [2.325769, 48.823907],
              [2.325749, 48.823837],
              [2.325749, 48.823837],
              [2.325706, 48.823654],
              [2.325634, 48.823353],
              [2.325625, 48.823317],
              [2.325625, 48.823317],
              [2.325612, 48.823233],
              [2.325612, 48.823233],
              [2.325598, 48.823147],
              [2.325595, 48.823114],
              [2.325582, 48.823028],
              [2.325582, 48.823028],
              [2.325566, 48.822941],
              [2.325566, 48.822941],
              [2.32556, 48.82291],
              [2.325551, 48.822872],
              [2.325542, 48.822833],
              [2.325542, 48.822833],
              [2.325535, 48.822805],
              [2.325528, 48.822774],
              [2.325528, 48.822774],
              [2.325586, 48.822702],
              [2.32556, 48.822585],
              [2.32556, 48.822585],
              [2.3255564326, 48.8225701979]
            ],
            properties: {
              sectionIndex: 0,
              color: "#0088ce",
              isPedestrian: true,
              type: "street_network"
            }
          }
        ],
        routeInfo: { tooltipCoord: { lat: 48.83471, lon: 2.324093 } }
      }
    ],
    linkBefore:
      "iI-BZPwT3kWRNIAxaKob5VzuHhEwSZbThZAhKNZZawzapKKprKl9cWQO_iaEWbR3r3K14coMimbS6zoVRdqdee0LtToHIn3ZsKdKTrDIOk80trDkPuVAn-4rRL7DmJVJQRSXEt-BVjiesXaOi-b8ONqTjED0e_2JUwg3opJqfC-qtCO2OxDku9QbCOCinpsiXEWqSPFye2dygtA3Ssx0C2951vBv763UCixbTdyvqCBqsTmLMBSzCT_aZkM4h6IF2OcNoE0G1A9wcpjuTP-dBw",
    linkAfter:
      "iI-BZPwT3kWRNIAxaKob5VzuHhEwSZbThZAhKNZZawzapKKprKl9cWQO_iaEWbR3r3K14coMimbS6zoVRdqdee0LtToHIn3ZsKdKTrDIOk80trDkPuVAn-4rRL7DmJVJRlusyzYQDpBGwTAoM30rFtrJsWdtpGhs8WYrxb5QNtftC7U6ByJ92bCnSk6wyDpPUKzmZDjV7qljemvIadDo_LexFS449iaAri2XfV7jN9iBzNBo2WYzBVRmz3y_MjSFbo_aq-07HoZ3bizSfmDZ7A"
  };
  const dataDetails = data.journeys[0].sections;

//   const dictonary = {
//     METRO: "Ligne",
//     BUS: "Bus",
//     RER: "Ligne"
//   };

//   {dictonary[transport.mode]}

  return (
    <div className="col-12 detail-card-result">

<div>Zone {data.journeys[0].zones.min} - {data.journeys[0].zones.max}</div>
      {dataDetails
        .filter(data => _get(data, "departure", false))
        .map(x => {
          return (
            <>
              <div>{x.totalDuration.slice(2, x.totalDuration.length - 1)} minutes</div>
              <div>{x.departure.label}</div>
              <div>{x.direction}</div>
              <div>{x.arrival.label}</div>
            </>
          );
        })}
    </div>
  );
}

export default ResultCardDetail;
