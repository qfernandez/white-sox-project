function returnData() {
            //Player basic infor API
            $.ajax({
                type: "GET",
                url: "https://gist.githubusercontent.com/brettphillips05/4b177fbf43b3e327cba60092d8df5b8f/raw/bc3001faca208301b37970d0aa072cddfe26126c/6a257880-bbd2-4d37-a79a-90fd6145e563.json",
                dataType: "json",
                success: function(data, status) {
                        $('#rpm_value').append(data["measurements"]["statistics"][0]["value"]);
                        $('#pitch_type').append(data["measurements"]["statistics"][204]["pitch_type"]);
                        $('#pitch_speed').append(data["measurements"]["statistics"][2]["value"]);
                        $('#launch_angle').append(data["measurements"]["statistics"][5]["value"]);
                        $('#exit_velocity').append(data["measurements"]["statistics"][3]["value"]);
                        $('#hit_distance').append(data["measurements"]["statistics"][38]["value"]);
                }
            });
}

function jakeRogersBasicData(){
    $.ajax({
                        type: "GET",
                        url: "https://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code=%27mlb%27&player_id=%27668670%27",
                        dataType:"json",
                        success: function(data, status) {
                            $('#pitcher_name').append(data["player_info"]["queryResults"]["row"]["name_display_roster_html"]);
                            $('#pitcher_team').append(data["player_info"]["queryResults"]["row"]["team_name"]);
                            $('#pitcher_throws').append(data["player_info"]["queryResults"]["row"]["throws"]);
                        }
                     });
}

function zackCollinsBasicData(){
    $.ajax({
                        type: "GET",
                        url: "https://lookup-service-prod.mlb.com/json/named.player_info.bam?sport_code=%27mlb%27&player_id=%27641470%27",
                        dataType:"json",
                        success: function(data, status) {
                            $('#batter_name').append(data["player_info"]["queryResults"]["row"]["name_display_roster_html"]);
                            $('#batter_team').append(data["player_info"]["queryResults"]["row"]["team_name"]);
                            $('#batter_bats').append(data["player_info"]["queryResults"]["row"]["throws"]);
                        }
                     });
}

function zachCollinsCareerData(){
    // //Stats API
                    $.ajax({
                        type: "GET",
                        url: "https://lookup-service-prod.mlb.com/json/named.sport_career_hitting.bam?league_list_id=%27mlb%27&game_type=%27R%27&player_id=%27641470%27",
                        dataType:"json",
                        success: function(data, status) {
                            $('#batter_runs').append(data["sport_career_hitting"]["queryResults"]["row"]["r"]);
                            $('#batter_hits').append(data["sport_career_hitting"]["queryResults"]["row"]["h"]);
                            $('#batter_homeruns').append(data["sport_career_hitting"]["queryResults"]["row"]["hr"]);
                            $('#batter_rbis').append(data["sport_career_hitting"]["queryResults"]["row"]["rbi"]);
                            $('#batter_bb').append(data["sport_career_hitting"]["queryResults"]["row"]["bb"]);
                            $('#batter_avg').append(data["sport_career_hitting"]["queryResults"]["row"]["avg"]);
                            $('#batter_obp').append(data["sport_career_hitting"]["queryResults"]["row"]["obp"]);
                            $('#batter_ops').append(data["sport_career_hitting"]["queryResults"]["row"]["ops"]);
                        }
                     });
}

function jakeRogersCareerData(){
    // //Stats API
                    $.ajax({
                        type: "GET",
                        url: "https://lookup-service-prod.mlb.com/json/named.sport_career_pitching.bam?league_list_id=%27mlb%27&game_type=%27R%27&player_id=%27668670%27",
                        dataType:"json",
                        success: function(data, status) {
                            $('#pitcher_era').append(data["sport_career_pitching"]["queryResults"]["row"]["era"]);
                            $('#pitcher_ip').append(data["sport_career_pitching"]["queryResults"]["row"]["ip"]);
                            $('#pitcher_hits').append(data["sport_career_pitching"]["queryResults"]["row"]["h"]);
                            $('#pitcher_whip').append(data["sport_career_pitching"]["queryResults"]["row"]["whip"]);
                            $('#pitcher_avg').append(data["sport_career_pitching"]["queryResults"]["row"]["avg"]);
                            $('#pitcher_obp').append(data["sport_career_pitching"]["queryResults"]["row"]["obp"]);
                            $('#pitcher_k9').append(data["sport_career_pitching"]["queryResults"]["row"]["k9"]);
                            $('#pitcher_spct').append(data["sport_career_pitching"]["queryResults"]["row"]["spct"]);
                        }
                     });
}

function showFacts(){
    
    $("#facts").empty();
    
    $.ajax({
        type: "GET",
        url: "https://gist.githubusercontent.com/brettphillips05/4b177fbf43b3e327cba60092d8df5b8f/raw/bc3001faca208301b37970d0aa072cddfe26126c/6a257880-bbd2-4d37-a79a-90fd6145e563.json",
        dataType:"json",
        success: function(data, status) {
            var i = getRandomInt(204);
            $('#facts').append("Type ID: " + data["measurements"]["statistics"][i]["type_id"] + "<br>");
            $('#facts').append("Category: " + data["measurements"]["statistics"][i]["category"] + "<br>");
            $('#facts').append("Descritpion: " + data["measurements"]["statistics"][i]["description"] + "<br>");
            $('#facts').append("Name: " + data["measurements"]["statistics"][i]["name"] + "<br>");
            $('#facts').append("Value: " + data["measurements"]["statistics"][i]["value"] + "<br>");
            $('#facts').append("Unit: " + data["measurements"]["statistics"][i]["unit"] + "<br>");
        }
    });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}