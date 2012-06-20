function init(){

   var sb = new $jit.Sunburst({
        injectInto: 'infovis',
        Node: {
          overridable: true,
        },
        levelDistance: 90,
        Label: {
          type: 'Native'
        },
        Events: {
          enable: true,
          onClick: function(node) {
            if(!node) return;
            var html = "<h4>" + node.name + "</h4>", data = node.data;
            if("description" in data) {
              html += data.description;
            }
            if("population" in data) {
              html += "<br /><br /><b>Population: </b><br />" + data.population;
            }
            
            $jit.id('inner-details').innerHTML = html;
            
            sb.tips.hide(); 
           
            sb.rotate(node, 'animate' , {
              duration: 1000,
              transition: $jit.Trans.Quart.easeInOut
            });

          }
        },
        Tips: {
          enable: true,
          onShow: function(tip, node) {
            var html = "<div class=\"tip-title\">" + node.name + "</div>"; 
            tip.innerHTML = html;
          }
        },
        NodeStyles: {
          enable: true,
          type: 'Native',
          stylesClick: {
            'color': '#CCC'
          },
          stylesHover: {
            'color': '#999'
          }
        }, 
    });

    sb.loadJSON(json);
    sb.refresh(); 
}
