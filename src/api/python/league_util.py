LEAGUE_API_KEY="something"

def league_test():
    api_key = LEAGUE_API_KEY
    watcher = LolWatcher(api_key)
    my_region = 'na1'
    me = watcher.summoner.by_name(my_region, "virkthejerk")
    return me

def get_league_rank(summoner):
    api_key = LEAGUE_API_KEY
    
    watcher = LolWatcher(api_key)
    my_region = 'na1'   
    me = watcher.summoner.by_name(my_region, summoner)
    my_ranked_stats = watcher.league.by_summoner(my_region, me['id'])
    json_formatted_str = json.dumps(my_ranked_stats, indent=2)
    response = f"```{json_formatted_str}```"
    return response

def get_league_rank_internal(summoner):
    api_key = LEAGUE_API_KEY
    watcher = LolWatcher(api_key)
    my_region = 'na1'
    ranked_array = []
    me = watcher.summoner.by_name(my_region, summoner)
    my_ranked_stats = watcher.league.by_summoner(my_region, me['id'])
    if my_ranked_stats == []:
        ranked_array.append("BRONZE")
        return ranked_array
    response = json.dumps(my_ranked_stats, indent=2)
    response = json.loads(response)
    for x in response:
        try:
            if x['tier'] in ranked_array:
                next
            else:
                ranked_array.append(x['tier'])
        except:
            ranked_array.append("BRONZE")
    return ranked_array


async def create_random_team(*summoner_names):
    rank = {
    "iron": 5, 
    "bronze": 10, 
    "silver": 15, 
    "gold": 20, 
    "platinum": 25, 
    "diamond": 30, 
    "master": 35, 
    "grandmaster": 40, 
    "challenger": 45
    }
    team1 = {}
    team2 = {}
    for summoner in summoner_names:
        summoner_rank = get_league_rank_internal(summoner)
        if len(summoner_rank) > 1:
            counter = 50
            for x in summoner_rank:
                if rank[x.lower()] < counter:
                    counter = rank[x.lower()]
            if len(team1) < len(team2):
                team1[summoner] = counter
            else:
                team2[summoner] = counter
        else:
            if len(team1) < len(team2):
                team1[summoner] = rank[summoner_rank[0].lower()]
            else:
                team2[summoner] = rank[summoner_rank[0].lower()]
    while(abs(sum(team1.values()) - sum(team2.values())) >= 6):
        team1 = {k : v for k, v in sorted(team1.items(), key=lambda item: item[1])}
        team2 = {k : v for k, v in sorted(team2.items(), key=lambda item: item[1])}
        counter = 0
        for (k,v), (k2,v2) in zip(list(team1.items()), list(team2.items())):
            if v > v2:
                team2[k] = v
                team1.pop(k)
                team1[k2] = v2
                team2.pop(k2)
            elif v2 > v:
                team2[k] = v
                team1.pop(k)
                team1[k2] = v2
                team2.pop(k2)
            else:
                next
            if abs(sum(team1.values()) - sum(team2.values())) <= 5:
                break
    return ((team1, team2)) 
