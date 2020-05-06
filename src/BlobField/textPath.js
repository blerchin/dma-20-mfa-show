/** Render text along a path in a Canvas
*	Adds extra functionality to the CanvasRenderingContext2D by extending its prototype.
*	Extent the global object with options:
*		- textOverflow {undefined|visible|ellipsis|string} the text to use on overflow, default "" (hidden)
*		- textJustify {undefined|boolean} used to justify text (otherwise use textAlign), default false
*		- textStrokeMin {undefined|number} the min length (in pixel) for the support path to draw the text upon, default 0
* 
* @param {string} text the text to render
* @param {Array<Number>} path an array of coordinates as support for the text (ie. [x1,y1,x2,y2,...]
*/

/* Usefull function */
function dist2D(x1,y1,x2,y2)
{	var dx = x2-x1;
	var dy = y2-y1;
	return Math.sqrt(dx*dx+dy*dy);
}

/* textPath function */
export function textPath(ctx, text, path, _options = {})
{	
    const options = {
        minWidth: 1,
        textOverflow: 'ellipsis',
        textAlign: 'left',
        textStrokeMin: 0,
        textOffset: -10,
        ..._options
    };
    
    // Helper to get a point on the path, starting at dl 
	// (return x, y and the angle on the path)
	var di, dpos=0;
	var pos=2;
	function pointAt(dl)
	{	if (!di || dpos+di<dl)
		{ for (; pos<path.length; )
			{	di = dist2D(path[pos-2],path[pos-1], path[pos],path[pos+1]);
				if (dpos+di>dl) break;
				pos += 2;
				if (pos>=path.length) break;
				dpos += di;
			}
		}
   
		var x, y, dt = dl-dpos;
		if (pos>=path.length) 
		{	pos = path.length-2;
		}

		if (!dt) 
		{	x = path[pos-2];
			y = path[pos-1];
		}
		else
		{	x = path[pos-2]+ (path[pos]-path[pos-2])*dt/di;
			y = path[pos-1]+ (path[pos+1]-path[pos-1])*dt/di;
		}
		return [x, y, Math.atan2(path[pos+1]-path[pos-1], path[pos]-path[pos-2])];
	}

	var letterPadding = ctx.measureText(" ").width *0.25;
  
	// Calculate length
	var d = 0;
	for (var i=2; i<path.length; i+=2)
	{	d += dist2D(path[i-2],path[i-1],path[i],path[i+1])
	}
	if (d < options.minWidth) return;
	var nbspace = text.split(" ").length -1;

	// Remove char for overflow
	if (options.textOverflow !== "visible")
	{	if (d < ctx.measureText(text).width + (text.length-1 + nbspace) * letterPadding)
		{	var overflow = (options.textOverflow === "ellipsis") ? '\u2026' : options.textOverflow || "";
			var dt = overflow.length-1;
			do
			{	if (text[text.length-1]===" ") nbspace--;
				text = text.slice(0,-1);
			} while (text && d < ctx.measureText(text+overflow).width + (text.length + dt + nbspace) * letterPadding)
			text += overflow;
		}
	}

	// Calculate start point
	var start = 0;
	switch (options.textJustify || options.textAlign)
	{	case true: // justify
		case "center":
		case "end":
		case "right":
		{	// Justify
			if (options.textJustify) 
			{	start = 0;
				letterPadding = (d - ctx.measureText(text).width) / (text.length-1 + nbspace);
			}
			// Text align
			else
			{	start = d - ctx.measureText(text).width - (text.length + nbspace) * letterPadding;
				if (options.textAlign === "center") start /= 2;
			}
			break;
		}
		// left
		default: break;
	}
  
	// Do rendering
	for (var t=0; t<text.length; t++)
	{	var letter = text[t];
		var wl = ctx.measureText(letter).width;
    
		var p = pointAt(start+wl/2);

		ctx.save();
		ctx.textAlign = "center";
		ctx.translate(p[0], p[1]);
        ctx.rotate(p[2]);
        ctx.translate(0, options.textOffset);
		if (ctx.lineWidth>0.1) ctx.strokeText(letter,0,0);
        ctx.fillText(letter,0,0);
        ctx.restore();
		start += wl+letterPadding*(letter === " "?2:1);
	}
  
}