! function(e, t, a)
{
	function n()
	{
		c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"), o(), r()
	}

	function r()
	{
		for (var e = 0; e < d.length; e++) d[e].alpha <= 0 ? (t.body.removeChild(d[e].el), d.splice(e, 1)) : (d[e].y--, d[e].scale += .004, d[e].alpha -= .013, d[e].el.style.cssText = "left:" + d[e].x + "px;top:" + d[e].y + "px;opacity:" + d[e].alpha + ";transform:scale(" + d[e].scale + "," + d[e].scale + ") rotate(45deg);background:" + d[e].color + ";z-index:99999");
		requestAnimationFrame(r)
	}

	function o()
	{
		var t = "function" == typeof e.onclick && e.onclick;
		e.onclick = function(e)
		{
			t && t(), i(e)
		}
	}

	function i(e)
	{
		var a = t.createElement("div");
		a.className = "heart", d.push(
		{
			el: a,
			x: e.clientX - 5,
			y: e.clientY - 5,
			scale: 1,
			alpha: 1,
			color: s()
		}), t.body.appendChild(a)
	}

	function c(e)
	{
		var a = t.createElement("style");
		a.type = "text/css";
		try
		{
			a.appendChild(t.createTextNode(e))
		}
		catch (t)
		{
			a.styleSheet.cssText = e
		}
		t.getElementsByTagName("head")[0].appendChild(a)
	}

	function s() {
        const colors = [
             "#d9b0b0", "#d9ac6b", "#bf9180", "#9ab099", "#8fa699", "#d9b0c3", "#d9d9d9", "#aea7d9",  
             "#f2d399", "#97a6a0", "#eaa3b5", "#f2dfa7", "#f0cbc5", "#e698b1", "#9e9bd2", "#c3aae1",   
             "#f9e1df", "#c08691", "#d5f1fd", "#708089", "#e1cbb1", "#cad5dc",  "#edece8", "#dccdc6", 
             "#ebebe4", "#8b7d86", "#f2af9b", "#f2cd89", "#d9a648", "#d9c9ba"

        ];
    
        // Get a random color from the array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return randomColor;
    }
    
	var d = [];
	e.requestAnimationFrame = function()
	{
		return e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function(e)
		{
			setTimeout(e, 1e3 / 60)
		}
	}(), n()
}(window, document);
