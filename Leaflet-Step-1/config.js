// API key
const API_KEY = "pk.eyJ1Ijoic2FkZWJheW8yNDYiLCJhIjoiY2tucDh5YWpwMTZwdTJvbzV2YzV1cXhzaCJ9.vy-csBuy-Rs4m7ii8K9uKA";
search_api.create( "search", { 
    on_result: function(o) { 
        map 
            .fitBounds([ // zoom to location 
                [ o.result.properties.LatMin, o.result.properties.LonMin ], 
                [ o.result.properties.LatMax, o.result.properties.LonMax ] 
            ]) 
            .openPopup( // open popup 
                "<b>"+o.result.properties.Label+"</b><br/><i>"+o.result.properties.Category +"</i>", 
                [ o.result.properties.Lat, o.result.properties.Lon ] 
            ); 
    } 
}); 