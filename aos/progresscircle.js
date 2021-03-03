function makesvg(percentage, inner_text=""){

  var abs_percentage = Math.abs(percentage).toString();
  var percentage_str = percentage.toString();
  var classes = ""

  if(percentage >=50 && percentage <60){
    classes = "one-stroke ";
  } 
  else if(percentage >=60 && percentage <=70){
    classes = "two-stroke";
  } 
  else if(percentage >70 && percentage <=80){
    classes = "three-stroke";
  } 
  else if(percentage >80 && percentage <90){
    classes = "four-stroke";
  } 
  else if(percentage >=90 && percentage <100){
    classes = "five-stroke";
  } 
  else 
  classes="six-stroke"

 var svg = '<svg class="circle-chart text.caption" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">'
     + '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />'
     + '<style>'+ '.small { fill:white;} '+'</style>'
     + '<circle class="circle-chart__circle '+classes+'"'
     + 'stroke-dasharray="'+ abs_percentage+',100"    cx="16.9" cy="16.9" r="15.9" />'
     + '<g class="circle-chart__info">'
     + '   <text class="circle-chart__percent small" x="17.9" y="15.5">'+percentage_str+'%</text>';

  if(inner_text){
    svg += '<text class="circle-chart__subline small" x="16.91549431" y="22">'+inner_text+'</text>'
  }
  
  svg += ' </g></svg>';
  
  return svg
}

(function( $ ) {

    $.fn.circlechart = function() {
        this.each(function() {
            var percentage = $(this).data("percentage");
            var inner_text = $(this).text();
            $(this).html(makesvg(percentage, inner_text));
        });
        return this;
    };

}( jQuery ));