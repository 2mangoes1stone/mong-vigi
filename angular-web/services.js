movieApp.service('moviesService', ['$resource', function($resource) {
  
      this.getMovies = function() {
          var moviesAPI = $resource("http://localhost:8888/api/movies", { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
          return moviesResult = moviesAPI.query(function(){
            console.log(moviesResult);
          })

      };
      
  }]);