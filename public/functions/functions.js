function returnData() {
            //Player basic infor API
            $.ajax({
                type: "GET",
                url: "https://gist.githubusercontent.com/brettphillips05/4b177fbf43b3e327cba60092d8df5b8f/raw/bc3001faca208301b37970d0aa072cddfe26126c/6a257880-bbd2-4d37-a79a-90fd6145e563.json",
                dataType: "json",
                data: { },
                success: function(data, status) {
                        // $('#information').append(data["Play"]["playId"]);
                        // $('#information').append(data["measurements"]["statistics"]["description"]);
                        for (var i=0; i<data.length; i++) {
                             $('#information').append(data[i]);
                        }
                        jQuery.each(data, function(index, item) {
                            //now you can access properties using dot notation
                            $('#information').append(data.measurements)
                        });
                        // $('#information').append(data.measurements);
                    // //Stats API
                    // $.ajax({
                    //     type: "GET",
                    //     url: "https://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season=" + $("#year").val() + "&player_id=" + x,
                    //     dataType:"json",
                    //     success: function(data, status) {
                    //         $('#p_season').append(data["sport_hitting_tm"]["queryResults"]["row"]["season"]);
                    //         $('#p_team').append(data["sport_hitting_tm"]["queryResults"]["row"]["team_full"]);
                    //         $('#p_avg').append(data["sport_hitting_tm"]["queryResults"]["row"]["avg"]);
                    //         $('#p_walks').append(data["sport_hitting_tm"]["queryResults"]["row"]["bb"]);
                    //         $('#p_rbis').append(data["sport_hitting_tm"]["queryResults"]["row"]["rbi"]);
                    //         $('#p_hrs').append(data["sport_hitting_tm"]["queryResults"]["row"]["hr"]);
                            
                    //         //Image API
                    //         // $.ajax({
                    //         //     type: "GET",
                    //         //     url: " https://serpapi.com/search.html?q=" + y + "&tbm=isch&ijn=0",
                    //         //     dataType:"json",
                    //         //     success: function(data, status) {
                    //         //         console.log(data)
                    //         //         $('#information').append("<br>Birth City Picture: " + data["image_results"]["original"]);
                    //         //     }
                    //         // });
                    //     }
                    //  });
                }
            });
            // $.ajax({

            //         type: "GET",
            //         url: "api/getPetInfo.php",
            //         dataType: "json",
            //         data: { "petid": $(this).attr('id') },
            //         success: function(data, status) {
            //             $("#petname").html(data.name);
            //             $("#description").html(data.description);
            //             $("#petImage").attr('src', "img/" + data.pictureURL);
            //             $("#breed").html(data.breed);
            //             $("#age").html(2018 - data.yob);
                        
            //             //alert(data); 
                        
                        
                    
            //         },
            //   }); // ajax closing
}