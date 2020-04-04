
// using switch
var dropdown = d3.select('#selDataset')
dropdown.on('change', updatePlot)
function updatePlot() {
    var value = dropdown.property('value')
    var trace = {
        type: 'pie'
    }
    switch (value) {
        case "burger":
            trace.values = Object.values(data.burger)
            trace.labels = Object.keys(data.burger)
            break;
        case "pizza":
            trace.values = Object.values(data.pizza)
            trace.labels = Object.keys(data.pizza)
            break;
        case "sandwich":
            trace.values = Object.values(data.sandwich)
            trace.labels = Object.keys(data.sandwich)
            break;
        case "chicken":
            trace.values = Object.values(data.chicken)
            trace.labels = Object.keys(data.chicken)
            break;
        default: 
    }
    var layout = {
        title: d3.select('#selDataset option:checked').text(),
        font: {
            family: 'Courier New, monospace',
            size: 24
        },
        
    }
    Plotly.newPlot('pie', [trace], layout)
}
dropdown.dispatch('change')