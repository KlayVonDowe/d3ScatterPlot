const w = 920;
const h = 630;
const p = 60;

const svg = d3.select('body').append('svg').attr('height',h + p).attr('width',w+p).style('margin', 100).attr('class','svg')

fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json')
.then(response => response.json())
.then(data => {
        data.map(data => {data.Time = new Date('1970-1-1 0:' + data.Time);})
        data.map(function(items){
        return (items)
        })
        var Data = data.map(function(items){
            return (items)
            })
        var Year = data.map(function(items){
            return (items.Year)
        })
        //var Time = data.map(function(items){
           // var correctTime = items.Time.split(':')
           // return (new Date(1950, 0, 1, 0, correctTime[0], correctTime[1]))
       // })

const xScale = d3.scaleLinear().domain([d3.min(data, (d) => d.Year - 1), d3.max(data, (d) => d.Year + 1)]).range([60,w ])
const yScale = d3.scaleTime().domain(d3.extent(data, (d) => d.Time)).range([60,h-p])

console.log(data)

svg.selectAll('.dot').data(data).enter()
.append('circle')
.attr('cx',(d) => xScale(d.Year))
.attr('cy', (d) => yScale(d.Time))
.attr('r',5)
.attr('data-yvalue',(d) => (d.Time))
.attr('data-xvalue',(d) => (d.Year))
.attr('class','dot')
.style('fill', (d) => {
    if (d.Doping == ''){
    return 'Green'}
    else{ return 'Orange'}
})
.on("mouseover", function(d){
    tooltip
      .style("left", d3.event.pageX - 100 + "px")
      .style("top", d3.event.pageY - 80 + "px")
      .style("display", "inline-block")
      .html("Year: "+d.Year +'<br/>' +  "Name: " + d.Name + '<br/>' + 'Time: ' + timeFormat(d.Time) + '<br/>' + 'Doping Allegations: ' + d.Doping)
      .attr("data-year", d.Year);
 }).on("mouseout", function(d){ tooltip.style("display", "none");});

const xAxis = d3.scaleLinear().domain([d3.min(Year , (d) => d - 1), d3.max(Year, (d) => d + 1 )]).range([0, w  -p ])
const bottomAxis = d3.axisBottom(xAxis).tickFormat(d3.format(d3.format('d')))
svg.append('g').attr('id','x-axis').attr("transform", "translate(60," + (h -p ) + ")").call(bottomAxis)

const yAxis = d3.scaleTime().domain(d3.extent(data, (d) => d.Time)).range([60,h - p ])
var timeFormat = d3.timeFormat('%M:%S');
const leftAxis = d3.axisLeft(yAxis).tickFormat(timeFormat)
svg.append('g').attr('id','y-axis').attr("transform", "translate(70," + (0) + ")").call(leftAxis).style('font-size', '15px')

svg.append('text')
.attr('text-anchor', 'middle')
.attr('x',450)
.attr('y', 620)
.text('Years').style('font-size', '20px')

svg.append('text')
.attr('text-anchor', 'middle')
.attr('x',-250)
.attr('y', 0)
.attr("dy", ".75em")
.attr("transform", "rotate(-90)")
.text('Time in Minutes').style('font-size', '20px')

svg.append('text')
.attr('Title', 'middle')
.attr('text-anchor', 'middle')
.attr('x',450)
.attr('y', 30)
.text('Cyclist Times and Doping').style('font-size', '20px')

var tooltip = d3.select("body")
.append("div")
.attr("class", "toolTip")
.attr("id","tooltip");

var legend1 = svg.append('text').attr('id','legend').attr('text-anchor','middle').attr('x',440)
.attr('y', 640).text('Has Doping Allegations' );
 svg.append('circle').attr('cx',550).attr('cy',635).attr('r',8).style('fill','orange')
var legend2 = svg.append('text').attr('id','legend').attr('text-anchor','middle').attr('x',450)
.attr('y', 660).text('Has No Doping Allegations' )
svg.append('circle').attr('cx',555).attr('cy',657).attr('r',8).style('fill','Green')
})

