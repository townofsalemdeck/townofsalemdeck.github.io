
let value = 0;
let town_count = 0;
let mafia_count = 0;
let neutral_count = 0;
let role_to_value = {"Bodyguard":4, "Deputy":4, "Doctor":4, "Investigator":6, "Mayor":8, "Medium":3, "Sheriff":7, "Survivor":4, "Veteran":3, "Vigilante":5, "Townie":1, "Peaceful Townie":-1, "Spiteful Townie":-1, "Politician":-2, "Godfather":-8, "Janitor":-8, "Mafioso":-6, "Consigliere":-10, "Blackmailer":-9, "Amnesiac":0, "Executioner":-4, "Jester":-1, "Serial Killer":-8, "Werewolf":-9, "Witch":-5};

$(document).ready(function(){

    $(document).on("click", ".card", function() {

        let role = $(this).attr("id");
        let card_value = role_to_value[role];
        let parent_id = $(this).parent().attr("id");
        let class_ = $(this).attr("class");

        if (parent_id == "picker") {
            $("#deck").append($(this).clone());
            
            if (class_ == "card town") {
                town_count += 1
                document.getElementById("town_count").innerHTML = "Town Count: " + town_count.toString();
            }
            else if (class_ == "card mafia") {
                mafia_count += 1
                document.getElementById("mafia_count").innerHTML = "Mafia Count: " + mafia_count.toString();
            }
            else if (class_ == "card neutral") {
                neutral_count += 1
                document.getElementById("neutral_count").innerHTML = "Neutral Count: " + neutral_count.toString();
            }

            document.getElementById("card_count").innerHTML = "Card Count: " + (town_count + mafia_count + neutral_count).toString();

            value += card_value
            document.getElementById("value").innerHTML = "Value: " + value.toString();
            
        }

        else if (parent_id == "deck") {
            $(this).remove();

            if (class_ == "card town") {
                town_count -= 1
                document.getElementById("town_count").innerHTML = "Town Count: " + town_count.toString();
            }
            else if (class_ == "card mafia") {
                mafia_count -= 1
                document.getElementById("mafia_count").innerHTML = "Mafia Count: " + mafia_count.toString();
            }
            else if (class_ == "card neutral") {
                neutral_count -= 1
                document.getElementById("neutral_count").innerHTML = "Neutral Count: " + neutral_count.toString();
            }

            document.getElementById("card_count").innerHTML = "Card Count: " + (town_count + mafia_count + neutral_count).toString();

            value -= card_value
            document.getElementById("value").innerHTML = "Value: " + value.toString();
        }

    });

});