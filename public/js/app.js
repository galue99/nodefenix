(function () {
	var app = angular.module('fenix', []);

		app.controller('IncidentesController', function(){
			
			this.prueba = [
				{
					'title': 'Prueba 1',
					'description': 'Esto es una descripcion 1'
				},
				{
					'title': 'Prueba 2',
					'description': 'Esto es una descripcion 2'
				}
			];


			this.showDate = function () {
      			date = 0;
      			date = Date.now();
      		return date;
    		};

		});
})();