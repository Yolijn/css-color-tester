// List of named css-colors
var cssColors = ["IndianRed", "LightCoral", "Salmon", "DarkSalmon", "Red", "Crimson", "FireBrick", "DarkRed", "Pink", "LightPink", "HotPink", "DeepPink", "MediumVioletRed", "PaleVioletRed", "LightSalmon", "Coral", "Tomato", 
"OrangeRed", "DarkOrange", "Orange", "Gold", "Yellow", "LightYellow", "LemonChiffon", "LightGoldenrodYellow", "PapayaWhip", "Moccasin", "PeachPuff", "PaleGoldenrod", "Khaki", "DarkKhaki", "Lavender", "Thistle", "Plum", "Violet", 
"Orchid", "Magenta", "MediumOrchid", "MediumPurple", "BlueViolet", "DarkViolet", "DarkOrchid", "DarkMagenta", "Purple", "Indigo", "DarkSlateBlue", "SlateBlue", "MediumSlateBlue", "GreenYellow", "Chartreuse", "LawnGreen", 
"Lime", "LimeGreen", "PaleGreen", "LightGreen", "MediumSpringGreen", "SpringGreen", "MediumSeaGreen", "SeaGreen", "ForestGreen", "Green", "DarkGreen", "YellowGreen", "OliveDrab", "Olive", "DarkOliveGreen", "MediumAquamarine", 
"DarkSeaGreen", "LightSeaGreen", "DarkCyan", "Teal", "Cyan", "LightCyan", "PaleTurquoise", "Aquamarine", "Turquoise", "MediumTurquoise", "DarkTurquoise", "CadetBlue", "SteelBlue", "LightSteelBlue", "PowderBlue", "LightBlue", 
"SkyBlue", "LightSkyBlue", "DeepSkyBlue", "DodgerBlue", "CornflowerBlue", "RoyalBlue", "Blue", "MediumBlue", "DarkBlue", "Navy", "MidnightBlue", "Cornsilk", "BlanchedAlmond", "Bisque", "NavajoWhite", "Wheat", "BurlyWood", 
"Tan", "RosyBrown", "SandyBrown", "Goldenrod", "DarkGoldenrod", "Peru", "Chocolate", "SaddleBrown", "Sienna", "Brown", "Maroon","White", "Snow", "Honeydew", "MintCream", "Azure", "AliceBlue", "GhostWhite", "WhiteSmoke", "Seashell", 
"Beige", "OldLace", "FloralWhite", "Ivory", "AntiqueWhite", "Linen", "LavenderBlush", "MistyRose", "Gainsboro", "LightGrey", "Silver", "DarkGray", "Gray", "DimGray", "LightSlateGray", "SlateGray", "DarkSlateGray", "Black"];

// Set default text and background color to values from html
var myTextColor = $(".my-text-color").html();
var myBackgroundColor = $(".my-background-color").html();
// Create styles object to change css styles in one go
var styles = {
	backgroundColor: myBackgroundColor,
	color: myTextColor
}

// Change html header to works/doesn't work depening on user input
function rightCombo(){
	$("h1 .does-it-work").html("works");
};

function wrongCombo(){
	$("h1 .does-it-work").html("doesn't work");
};

// Define empty array to push an option for each color to
var options = [];

// Set color option in form select for each css color in css-colors
for (var i = 0; i < cssColors.length; i++){
  var color = cssColors[i];
  var newOption = $("<option/>");
  newOption.html(color);
  options.push(newOption);
}
// Append all options to the two html select elements
  $("#set-text-color, #set-background-color").append(options);

/* If user submits new values for text color and/or background color, 
   change text names in header and preview and change colors of preview */
function changeColors(textColor, backgroundColor){
	styles.backgroundColor = backgroundColor;
	styles.color = textColor;

	$("#example").css(styles);
	$(".my-text-color").html(textColor);
	$(".my-background-color").html(backgroundColor);
};

// Check form for text and background value, and run changeColors function with these new values.
$( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  var formValue = $(this).serializeArray();
  for (var i = 0; i < formValue.length; i++){
  	if (formValue[i].name == "set-text-color"){
  		myTextColor = formValue[i].value;
  		console.log(myTextColor);
  	}
  	else if (formValue[i].name == "set-background-color"){
  		myBackgroundColor = formValue[i].value;
  		console.log(myBackgroundColor);
  	}
  }
  changeColors(myTextColor, myBackgroundColor);
});