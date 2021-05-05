export interface Team {
  idTeam: string;
  idSoccerXML: string;
  idAPIfootball: string;
  intLoved: string;
  strTeam: string;
  strTeamShort?: any;
  strAlternate: string;
  intFormedYear: string;
  strSport: string;
  strLeague: string;
  idLeague: string;
  strLeague2: string;
  idLeague2: string;
  strLeague3: string;
  idLeague3: string;
  strLeague4: string;
  idLeague4: string;
  strLeague5: string;
  idLeague5: string;
  strLeague6: string;
  idLeague6: string;
  strLeague7: string;
  idLeague7?: any;
  strDivision?: any;
  strManager: string;
  strStadium: string;
  strKeywords: string;
  strRSS: string;
  strStadiumThumb: string;
  strStadiumDescription: string;
  strStadiumLocation: string;
  intStadiumCapacity: string;
  strWebsite: string;
  strFacebook: string;
  strTwitter: string;
  strInstagram: string;
  strDescriptionEN: string;
  strDescriptionDE: string;
  strDescriptionFR?: any;
  strDescriptionCN: string;
  strDescriptionIT: string;
  strDescriptionJP: string;
  strDescriptionRU: string;
  strDescriptionES: string;
  strDescriptionPT: string;
  strDescriptionSE: string;
  strDescriptionNL: string;
  strDescriptionHU: string;
  strDescriptionNO: string;
  strDescriptionIL: string;
  strDescriptionPL: string;
  strGender: string;
  strCountry: string;
  strTeamBadge: string;
  strTeamJersey: string;
  strTeamLogo: string;
  strTeamFanart1: string;
  strTeamFanart2: string;
  strTeamFanart3: string;
  strTeamFanart4: string;
  strTeamBanner: string;
  strYoutube: string;
  strLocked: string;
}

export interface Teams {
  teams: Team[];
}

export interface SingleTeam {
  teams: Team[];
}
