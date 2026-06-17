const teams :readonly string[] =["australia", "india", "england", "new zealand", "south africa", "pakistan", "west indies", "sri lanka", "bangladesh", "afghanistan"];
const rank :number[] = [1,3,4,5,6,7,8,9,10,11];
const points:Array<number> = [120, 110, 100, 90, 80, 70, 60, 50, 40, 30];

type teamData={
    name:string;
    rank:number;
    isActive:boolean;
}
const teamsData:teamData[]=[
    {name:"australia", rank:1, isActive:true},
    {name:"india", rank:2, isActive:true},
]

const score:Number[][]=[
    [10,12,14],
    [15,16,17]

]

//tupple

const teamTupple :readonly [name:string,rank:number,isQlified:
    boolean]=["australia",1,true];

type ipl={
    team:string;
    players:number;
    isqulaified:boolean;
}
type domesticCricket={
    team:string;
    players:number;
    isqulaified:boolean;
}
const playerData:[ipl, domesticCricket]=[
    {team:"mumbai indians", players:25, isqulaified:true},
    {team:"mumbai indians", players:25, isqulaified:true}
]


 // Use regular enum for string enums (const enum has issues with string values)
enum teamType{
    COUNTRY = "india",
    STATE = "telanagana",
    CITY = "hyderabad"
}

function getTeamType(type: teamType): void {
   console.log(type);
}

getTeamType(teamType.COUNTRY);