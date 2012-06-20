function init(){

   var sb = new $jit.Sunburst({
        injectInto: 'infovis',
        Node: {
          overridable: true,
        },
        levelDistance: 90,
        
    });

    sb.loadJSON(json);
    sb.refresh(); 
}
