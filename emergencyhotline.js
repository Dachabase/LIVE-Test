document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
    const policeNumbersList = document.getElementById("police-numbers-list");

    searchButton.addEventListener("click", function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const policeNumbers = {
            "abia": "07068848035, 08075391943",
            "adamawa": "08123822284",
            "akwa ibom": "08032419754, 08123821575, 064977004, 064977005",
            "anambra": "08075872433, 08039537995, 08123823981",
            "bauchi": "08140089863, 08073260267",
            "bayelsa": "07039301585, 08035067570",
            "benue": "08075391335, 07038329084",
            "borno": "08106580123",
            "cross river": "08081777498, 08127185198",
            "delta": "08032003514, 08073777717",
            "ebonyi": "07057337653, 08061581938, 08032003913",
            "edo": "08062335577, 07089310359",
            "ekiti": "08075391255, 08075391250",
            "enugu": "07032069501, 08125275046",
            "gombe": "07055462708, 08035963919",
            "imo": "08123821571, 07075391560",
            "jigawa": "08079210003, 08079210004, 08079210005",
            "kaduna": "08089671313",
            "kano": "08039213071, 08020913810",
            "katsina": "07039194332, 08024922772, 08075390511, 08182951257",
            "kebbi": "08151849417, 08127162434, 08084763669, 08073794920",
            "kogi": "08032136765, 08081770416",
            "kwara": "07034313903, 08075391808",
            "lagos": "08066006475, 08053039936, 07075390977",
            "nasarawa": "08068075581, 08036071667, 08123823322",
            "niger": "08133568456, 07053355415",
            "ogun": "08036684974",
            "ondo": "07064515001, 08125273721, 08084704673",
            "osun": "08037646272, 08077773721, 08067551618",
            "oyo": "08081768614, 08150777888",
            "plateau": "08126375938, 08075391844, 08038907662",
            "rivers": "08032003702, 08075390883, 08086671202",
            "sokoto": "08150567771, 08151855014",
            "taraba": "08034773600, 08037037283",
            "yobe": "08075391069, 07089846285, 08123821598",
            "zamfara": "08075391943"
        };

        if (policeNumbers[searchTerm]) {
            const policeNumberInfo = policeNumbers[searchTerm];
            const listItems = policeNumberInfo.split(", ");
            let listHtml = `<h2>Police Numbers for ${searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}:</h2>`;

            listItems.forEach(function(listItem) {
                listHtml += `<li>${listItem}</li>`;
            });

            policeNumbersList.innerHTML = listHtml;
        } else {
            policeNumbersList.innerHTML = "No police number found for this state.";
        }
    });
});
