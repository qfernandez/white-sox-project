function returnData() {
            //Player basic infor API
            $.ajax({
                type: "GET",
                url: "https://gist.githubusercontent.com/brettphillips05/4b177fbf43b3e327cba60092d8df5b8f/raw/bc3001faca208301b37970d0aa072cddfe26126c/6a257880-bbd2-4d37-a79a-90fd6145e563.json",
                dataType: "json",
                success: function(data, status) {
                        $('#rpm_value').append(data["measurements"]["statistics"][0]["value"]);
                        $('#launch_angle').append(data["measurements"]["statistics"][5]["value"]);
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