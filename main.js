
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image){

fabric.Image.fromURL(get_image, function (Img) {
block_image_object = Img;
block_image_object.scaleToWidth (block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
top:block_y,
left: block_x
});
canvas.add(block_image_object);
});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		
		new_image('rr1.png')
	}
	if(keyPressed == '71')
	{
		new_image('gr.png')
		block_x = 200;
		// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		new_image('yr.png')
		block_x =350;
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		new_image('pr.png')
		block_x = 600;
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		new_image('br.png')
		block_x = 700;
	// upload blue ranger
	}
	
}

