const w = 920;
const h = 630;
const p = 60;

const svg = d3.select('body').append('svg').attr('height',h).attr('width',w).style('padding',p)

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

const xScale = d3.scaleLinear().domain([d3.min(data, (d) => d.Year - 1), d3.max(data, (d) => d.Year + 1)]).range([0,w-p])
const yScale = d3.scaleTime().domain(d3.extent(data, (d) => d.Time)).range([0,h-p])

console.log(data)

svg.selectAll('.dot').data(data).enter()
.append('circle')
.attr('cx',(d) => xScale(d.Year))
.attr('cy', (d) => yScale(d.Time))
.attr('r',5)
.attr('data-yvalue',(d) => yScale(d.Time))
.attr('data-xvalue',(d) => xScale(d.Year))
.attr('class','dot')

const xAxis = d3.scaleTime().domain([d3.min(Year - 1), d3.max(Year + 1)]).range([0, w - p])
const bottomAxis = d3.axisBottom(xAxis)

svg.append('g').attr("transform", "translate(0," + h - 65 + ")").call(bottomAxis)
svg.append('g').call(d3.axisLeft(yScale))

})

