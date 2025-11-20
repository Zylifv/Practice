const starterInfo = [
  [0.7, 6.9, "Bulbasaur", "#7AC74C"],
  [0.6, 8.5, "Charmander", "#EE8130"],
  [0.5, 9.0, "Squirtle", "#6390F0"],
  [0.9, 6.4, "Chikorita", "#7AC74C"],
  [0.5, 7.9, "Cyndaquil", "#EE8130"],
  [0.6, 9.5, "Totodile", "#6390F0"],
  [0.5, 5.0, "Treecko", "#7AC74C"],
  [0.4, 2.5, "Torchic", "#EE8130"],
  [0.4, 7.6, "Mudkip", "#6390F0"],
  [0.4, 10.2, "Turtwig", "#7AC74C"],
  [0.5, 6.2, "Chimchar", "#EE8130"],
  [0.4, 5.2, "Piplup", "#6390F0"],
  [0.6, 8.1, "Snivy", "#7AC74C"],
  [0.5, 9.9, "Tepig", "#EE8130"],
  [0.5, 5.9, "Oshawott", "#6390F0"]
];

const graphPlot = document.getElementById("graph");

const w = 600;
const h = 600;
const padding = 50;

const xScale = d3
      .scaleLinear()
      .domain([0, d3.max(starterInfo, d => d[0] * 1.5)])
      .range([padding, w - padding]);

const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(starterInfo, d => d[1] * 1.05)])
      .range([h - padding, padding]);

const svg = d3
      .select(graphPlot)
      .append('svg')
      .attr('width', w)
      .attr('height', h);

    svg
      .selectAll('circle')
      .data(starterInfo)
      .enter()
      .append('circle')
      .attr('cx', d => xScale(d[0]))
      .attr('cy', d => yScale(d[1]))
      .attr('r', d => 5)
      .attr('fill', d => d[3]);

    svg
      .selectAll('text')
      .data(starterInfo)
      .enter()
      .append('text')
      .text((d) => d[2])
      .attr('x', d => xScale(d[0] + 0.02))
      .attr('y', d => yScale(d[1] - 0.1));

  const xAxis = d3.axisBottom(xScale);

  const yAxis = d3.axisLeft(yScale);

    svg
      .append('g')
      .attr('transform', 'translate(0,' + (h - padding) + ')')
      .call(xAxis)

    svg.append('g')
      .attr('transform', 'translate(' + padding + ', 0)')
      .call(yAxis);

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - padding.left)
      .attr("x", 0 - (h / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Weight (kg)");

    svg.append("text")
      .attr("transform", "translate(" + (w / 2) + " ," + ((h - padding) + 40) + ")")
      .style("text-anchor", "middle")
      .text("Height (m)");
