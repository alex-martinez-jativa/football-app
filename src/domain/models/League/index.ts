export interface League {
  idLeague: string;
  idSoccerXML: string;
  idAPIfootball: string;
  strSport: string;
  strLeague: string;
  strLeagueAlternate: string;
  strDivision: string;
  idCup: string;
  strCurrentSeason: string;
  intFormedYear: string;
  dateFirstEvent: string;
  strGender: string;
  strCountry: string;
  strWebsite: string;
  strFacebook: string;
  strTwitter: string;
  strYoutube: string;
  strRSS: string;
  strDescriptionEN: string;
  strDescriptionDE: string;
  strDescriptionFR: string;
  strDescriptionIT: string;
  strDescriptionCN: string;
  strDescriptionJP: string;
  strDescriptionRU: string;
  strDescriptionES: string;
  strDescriptionPT: string;
  strDescriptionSE: string;
  strDescriptionNL: string;
  strDescriptionHU: string;
  strDescriptionNO: string;
  strDescriptionPL: string;
  strDescriptionIL: string;
  strFanart1: string;
  strFanart2: string;
  strFanart3: string;
  strFanart4: string;
  strBanner: string;
  strBadge: string;
  strLogo: string;
  strPoster: string;
  strTrophy: string;
  strNaming: string;
  strComplete: string;
  strLocked: string;
}

export interface Leagues {
  countrys: League[];
}

export interface SingleLeague {
  leagues: League[];
}
