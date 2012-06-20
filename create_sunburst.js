function init(){

   var sb = new $jit.Sunburst({
        injectInto: 'infovis',
        Node: {
          overridable: true,
        },
        levelDistance: 90,
        Label: {
          type: 'Native'
        }
        
    });

    sb.loadJSON(json);
    sb.refresh(); 
}
