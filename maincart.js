$( function() {
    var source   = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var groceries = [
      {picture: "http://del.h-cdn.co/assets/15/39/maple-glazed-turkey-with-bacon-and-sage-butter-thanksgiving-recipe-by-five-heart-home_700pxhoriz.jpg", names: "Turkey", Price: "$25.50"},
      {picture: "http://www.organicroots.net/wp-content/uploads/2013/11/whole-pumpkin-pie.jpg", names: "Pumpkin Pie", Price: "$7.35"},
      {picture: "https://tnbody.files.wordpress.com/2015/10/dollarphotoclub_85628289.jpg", names: "Cramberries", Price: "About $3.50"},
      {picture: "http://www.bestherbalhealth.com/wp-content/uploads/2014/02/SweetCorn.jpg", names: "Corn", Price: "$3.49"},
      {picture: "http://porterbriggs.com/wp-content/uploads/2014/03/maple-mashed-sweet-potatoes.jpg", names: "Sweet Potato", Price: "$6.29"},
    ];
    for (var i = 0; i < groceries.length; i++) {
      var html    = template(groceries[i]);
      $('#list1').append(html)
    }

    $( "#list1, #list2" ).sortable({
      connectWith: ".items"
      }).disableSelection();
} );
