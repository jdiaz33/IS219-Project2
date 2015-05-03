exports.graph = function(req, res){
	res.render('graph');
}

/*require.config({
  basedUrl: '/js',
  paths: {
    d3: "http://d3js.org/d3.v3.min"
  }
});

//require(["d3", "c3"], function(d3, c3){

exports.graph = function(req, res){
	require(["d3", "c3"], function(d3, c3){
	  var chart = c3.generate({
      data: {
          columns: [
              ['data1', 30, 200, 100, 400, 150, 250],
              ['data2', 130, 100, 140, 200, 150, 50]
          ],
          type: 'bar'
      },
      bar: {
          width: {
              ratio: 0.5 // this makes bar width 50% of length between ticks
          }
          // or
          //width: 100 // this makes bar width 100px
      }
  });
});
	res.render('d3', {
		chart: chart,
		title: 'Graph'
	}); 
}
//require('/project2/public/stylesheets/c3.min.css');
//require('./public/stylesheets/c3.min.js')(app);
//require('./public/stylesheets/d3.min.js')(app);
//var c3 = require('c3.min');
//script(src='http://d3js.org/d3.v3.min.js', charset='utf-8')
//script(src='/stylesheets/c3/c3.min.js')
var c3 = require('c3');
(function() {

	var poblacion = [
		{ Region: 'America', Pais: 'Costa Rica', Cantidad: 4 },
		{ Region: 'America', Pais: 'Argentina', Cantidad: 41}, 
	];
	var pobPais_Keys = poblacion.map(function(x) { return x.Pais });
	var pobPais_Values = poblacion.map(function(x) { return [ x.Pais, x.Cantidad ]; });
	
	console.log(pobPais_Keys); 
	console.log(pobPais_Values);
	
	var charPie = c3.generate({
		bindto: '#c-pie',
		data: {
			columns : pobPais_Values,
			keys : pobPais_Keys,
			type : 'pie',
			color : function (color, d) {
				var pais = (d.id) ? d.id : d;
				
				retur (pais == 'Costa Rica') ? '#FFC400' : color;
			}
		}
	});
}()); 

exports.graph = function(req, res) {
	res.render('graph', { 
		//graph: charPie
		//var charPie = c3.generate({
			charPie : c3.generate({
			bindto: '#c-pie',
			data: {
				columns: pobPais_Values,
				keys: pobPais_Keys,
				type: 'pie',
				color : function (color, d) {
					var pais = (d.id) ? d.id : d;
					
					return (pais == 'Costa Rica') ? '#FFC400' : color;
				}
			}	
		})
	});
}*/