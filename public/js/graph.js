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
				
				return (pais == 'Costa Rica') ? '#FFC400' : color;
			}
		}
	});
}());