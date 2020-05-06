import { PointText } from 'paper';

export function createAlignedText(str, path, glyphTexts, style = {}) {
    if (str && str.length > 0 && path) {
        // create PointText object for each glyph
        glyphTexts.forEach((g) => g.remove());
        for (var i = 0; i < str.length; i++) {
            glyphTexts[i] = createPointText(str.substring(i, i+1), style);
            glyphTexts[i].justification = "center";
        }
        // for each glyph find center xOffset
        var xOffsets = [0];
        for (var i = 1; i < str.length; i++) {
            var pairText = createPointText(str.substring(i - 1, i + 1), style);
            pairText.remove();
            xOffsets[i] = xOffsets[i - 1] + pairText.bounds.width - 
                glyphTexts[i - 1].bounds.width / 2 - glyphTexts[i].bounds.width / 2;
        }
        // set point for each glyph and rotate glyph aorund the point
        for (var i = 0; i < str.length; i++) {
            var centerOffs = xOffsets[i];
            if (path.length < centerOffs) {
                if (path.closed) {
                    centerOffs = centerOffs % path.length;
                }  else {
                    centerOffs = undefined;
                }
            }
            if (centerOffs === undefined) {
                glyphTexts[i].remove();
            } else {
                var pathPoint = path.getPointAt(centerOffs);
                glyphTexts[i].point = pathPoint;
                if (style.baselineShift) {
                    glyphTexts[i].translate(0, style.baselineShift);
                }
                var tan = path.getTangentAt(centerOffs); 
                glyphTexts[i].rotate(tan.angle, pathPoint);
            }
        }
    }
}

// create a PointText object for a string and a style
var createPointText = function(str, style) {
    var text = new PointText();
    text.content = str;
    if (style) {
        if (style.font) text.font = style.font;
        if (style.fontFamily) text.fontFamily = style.fontFamily;
        if (style.fontSize) text.fontSize = style.fontSize;
        if (style.fontWieght) text.fontWeight = style.fontWeight;
    }
    return text;
}


