    function CsvToJson(file){
        var fila =  fileCsv.split("\n");
        var reg  =[];
        for(var i = 0; i <= fila.length-1;i++){
            var truc =  fila[i].split(",");
            reg.push(truc);
        }
        return reg;
    }
    
 
    